import { NavLink } from "react-router-dom";

function Navbar() {
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

      {/* ?? ADD THIS */}
      <NavLink to="/contact" style={{ color: "white" }}>
        Contact Us
      </NavLink>
    </nav>
  );
}

export default Navbar;