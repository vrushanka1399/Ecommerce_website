import { BrowserRouter, Route, Switch } from "react-router-dom";

import ContactUs from "./ContactUs";
import Products from "./Products";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";   // 👈 ADD THIS FILE
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />

        {/* 👇 MAKE THIS EXACT */}
        <Route path="/products" exact component={Products} />

        {/* 👇 DYNAMIC ROUTE FOR PRODUCT DETAILS */}
        <Route path="/products/:productId" component={ProductDetail} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App; 