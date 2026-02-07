import { useState } from "react";
import { registerUser } from "@services/flashcardsApiService";
import "./style.css";
import { errorCodes, errorTypes } from "@consts/const";
import { Link } from "react-router";

export const RegisterPage = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [response, setResponse] = useState<{
    type?: errorCodes;
    message?: string;
  }>({});
  const register = async () => {
    try {
      await registerUser({ name, password, email });
      setResponse({
        type: errorTypes.SUCCESS,
        message: "User registered successfully",
      });
    } catch (error: any) {
      setResponse({
        type: errorTypes.ERROR,
        message: error.response.data.message,
      });
    }
  };
  return (
    <div className="registerPage">
      <form className="registerPage__form">
        <h1>Rejestracja: </h1>
        <label htmlFor="name" className="registerPage__label">
          Podaj nazwę
        </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Username"
        />
        <label htmlFor="email" className="registerPage__label">
          Podaj login
        </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="email"
        />
        <label htmlFor="password" className="registerPage__label">
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
          value="Zarejestruj"
          className="registerPage__submit"
          onClick={register}
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
          Masz już konto? <Link to={"/login"}>Zaloguj się.</Link>{" "}
        </p>
      </form>
    </div>
  );
};
