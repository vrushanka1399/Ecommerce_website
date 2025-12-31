import { BrowserRouter, Route, Switch } from "react-router-dom";

import ContactUs from "./ContactUs";
import Products from "./Products";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />  {/* ?? NEW */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;