import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./AuthContext";

function Login() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_FIREBASE_API_KEY",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Login failed");
      }

      setIsLoading(false);

      // 🔥 store token in context + localStorage
      authCtx.login(data.idToken);

      // 🚀 redirect to products page
      history.push("/products");

    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <div style={{ width: 350, margin: "auto" }}>
      <h2>Login</h2>

      <form onSubmit={loginHandler}>
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button disabled={isLoading}>
          {isLoading ? "Sending request..." : "Login"}
        </button>
      </form>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Login;