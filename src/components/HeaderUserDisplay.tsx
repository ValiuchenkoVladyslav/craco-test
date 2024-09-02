import {useContext} from "react";
import {UserContext} from "../contexts/UserContext";
import {Link} from "react-router-dom";

export function HeaderUserDisplay() {
  const user = useContext(UserContext)?.user;

  return user?.is_authenticated ? (
    <h2>{user?.userData?.name}</h2>
  ) : (
    <Link to="/signup">
      <h3>Sign up</h3>
    </Link>
  );
}
