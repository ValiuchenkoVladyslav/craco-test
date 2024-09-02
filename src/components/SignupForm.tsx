import {useContext, useState} from "react";
import {UserContext, type User} from "../contexts/UserContext";
import {useNavigate} from "react-router-dom";

export function SignupForm() {
  const {setUser} = useContext(UserContext)!;
  const navigate = useNavigate();
  const [formData, setFormData] = useState<
    Omit<NonNullable<User["userData"]>, "id">
  >({name: "", password: "", email: ""});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function signup() {
      console.log(formData);
      const res = await fetch("http://localhost:3000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) return;

      const newUser: NonNullable<User["userData"]> = await res.json();
      console.log(newUser);
      const loginRes = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: newUser.id,
          password: formData.password,
        }),
      });

      if (!loginRes.ok) return;

      loginRes.json().then(console.log); // token

      setUser({
        is_authenticated: true,
        userData: newUser,
      });

      navigate("/user");
    }

    signup();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button>submit</button>
    </form>
  );
}
