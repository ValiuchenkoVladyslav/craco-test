import {PropsWithChildren} from "react";
import {UserProvider} from "../../contexts/UserContext";
import {HeaderUserDisplay} from "../../components/HeaderUserDisplay";
import {Link} from "react-router-dom";
import "./AppLayout.css";

export function AppLayout({children}: PropsWithChildren) {
  return (
    <UserProvider>
      <header className="app_header">
        <Link to="/">
          <h1>Главная</h1>
        </Link>

        <HeaderUserDisplay />
      </header>

      <main className="app_main">{children}</main>
    </UserProvider>
  );
}
