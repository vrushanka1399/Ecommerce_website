import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import ContactUs from "./ContactUs";
import Products from "./Products";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";
import SignUp from "./SignUp";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        {/* Home */}
        <Route path="/" exact component={Home} />

        {/* 🔒 Protected Products Page */}
        <ProtectedRoute
          exact
          path="/products"
          component={Products}
        />

        {/* 👇 Product Detail Dynamic Route */}
        <Route
          path="/products/:productId"
          component={ProductDetail}
        />

        {/* Other routes */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;