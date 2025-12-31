import { BrowserRouter, Route, Switch } from "react-router-dom";

import ContactUs from "./ContactUs";
import Products from "./Products";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import ProductDetail from "./ProductDetail";   // 👈 ADD THIS FILE

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
      </Switch>
    </BrowserRouter>
  );
}

export default App; 