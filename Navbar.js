import { NavLink, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

function Navbar() {

  // 👉 get auth context
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  // 👉 boolean flag
  const isLoggedIn = authCtx.isLoggedIn;

  // 👉 logout function
const logoutHandler = () => {
  authCtx.logout();        // ✔ clears token + localStorage
  history.push("/login");  // ✔ redirect to login page
};

  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        gap: "20px",
        justifyContent: "center"
      }}
    >
      <NavLink to="/" style={{ color: "white" }}>
        Home
      </NavLink>

      <NavLink to="/products" style={{ color: "white" }}>
        Store
      </NavLink>

      <NavLink to="/about" style={{ color: "white" }}>
        About
      </NavLink>

      <NavLink to="/contact" style={{ color: "white" }}>
        Contact Us
      </NavLink>

      {!isLoggedIn && (
        <NavLink to="/login" style={{ color: "white" }}>
          Login
        </NavLink>
      )}

      {isLoggedIn && (
        <>
          <NavLink to="/profile" style={{ color: "white" }}>
            Profile
          </NavLink>

          <button
            onClick={logoutHandler}
            style={{
              background: "transparent",
              border: "1px solid white",
              color: "white",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;