import { useState } from "react";
import "./style.css";
import { errorCodes, errorTypes } from "@consts/const";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router";

export const LoginPage = () => {
  const { user, login } = useAuth();
  console.log("user", user);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [response, setResponse] = useState<{
    type?: errorCodes;
    message?: string;
  }>({});
  const loginWrapper = async () => {
    try {
      login(email, password);
    } catch (error: any) {
      console.log(error);
      setResponse({
        type: errorTypes.ERROR,
        message: "error logging in",
      });
    }
  };
  return (
    <div className="loginPage">
      <form className="loginPage__form">
        <h1>Logowanie: </h1>
        <label htmlFor="email" className="loginPage__label">
          Podaj login
        </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="email"
        />
        <label htmlFor="password" className="loginPage__label">
          Podaj hasło
        </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
        />
        <input
          type="button"
          value="Zaloguj"
          className="loginPage__submit"
          onClick={loginWrapper}
        />
        {response && (
          <p
            className="loginError"
            style={{
              color: response.type === errorTypes.SUCCESS ? "green" : "red",
            }}
            id="error"
          >
            {response.message}
          </p>
        )}
        <p>
          Nie masz jeszcze konta?{" "}
          <Link to={"/register"}>Zarejestruj się.</Link>{" "}
        </p>
      </form>
    </div>
  );
};
