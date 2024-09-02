import {useContext} from "react";
import {UserContext} from "../contexts/UserContext";

export function UserInfo() {
  const {user} = useContext(UserContext)!;

  return (
    <div>
      <h2>Информация о пользователе</h2>
      <p>Имя: {user?.userData?.name}</p>
      <p>Почта: {user?.userData?.email}</p>
    </div>
  );
}
