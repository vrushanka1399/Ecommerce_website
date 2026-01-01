import React, { useState, useContext } from "react";
import AuthContext from "./AuthContext";

function Profile() {
  const authCtx = useContext(AuthContext);

  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=YOUR_FIREBASE_API_KEY",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,          // ?? current login token
            password: newPassword,           // ?? new password
            returnSecureToken: true
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Password update failed");
      }

      // optional: update token because Firebase returns new one
      authCtx.login(data.idToken);

      setIsLoading(false);
      setSuccess(true);
      alert("Password changed successfully!");

    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }

  return (
    <div style={{ width: 350, margin: "auto" }}>
      <h2>Your Profile</h2>
      <p>Enter a new password</p>

      <form onSubmit={submitHandler}>
        <input
          type="password"
          required
          minLength={6}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New password"
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Change Password"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Password Changed!</p>}
    </div>
  );
}

export default Profile;