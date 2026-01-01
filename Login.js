import React, { useState } from "react";

function Login() {
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
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed!");
      }

      setIsLoading(false);

      // 🔥 JWT TOKEN (idToken)
      console.log("LOGIN SUCCESS — TOKEN BELOW ⬇⬇⬇");
      console.log(data.idToken);

      alert("Login Successful!");

    } catch (err) {
      setIsLoading(false);
      setError(err.message || "Authentication failed!");
    }
  };

  return (
    <div style={{ width: 300, margin: "auto" }}>
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

        {/* 🔹 loader instead of button text */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending request..." : "Login"}
        </button>
      </form>

      {/* 🔹 show server error */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default Login;