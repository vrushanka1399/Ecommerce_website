import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Navbar from "./Navbar";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About /> },
]);

function App() {
  return (
    <>
      <Navbar />   {/* ?? always visible */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;