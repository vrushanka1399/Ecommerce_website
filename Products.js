import React, { useState, useRef } from "react";
import { Button, Spinner } from "react-bootstrap";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const retryTimer = useRef(null);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError("");

      // ?? replace this URL with your actual backend later
      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      // simulate products coming
      setProducts(data.results);
      setIsLoading(false);

      // ? important: stop retry when success
      if (retryTimer.current) clearTimeout(retryTimer.current);

    } catch (err) {
      setIsLoading(false);

      // ?? required message
      setError("Something went wrong... Retrying");

      // ? retry again in 5 seconds
      retryTimer.current = setTimeout(() => {
        fetchProducts();
      }, 5000);
    }
  };

  const cancelRetryHandler = () => {
    if (retryTimer.current) {
      clearTimeout(retryTimer.current);
    }
    setError("Retry cancelled");
  };

  return (
    <div className="text-center">

      <Button onClick={fetchProducts} className="mb-3">
        Fetch Products
      </Button>

      {isLoading && (
        <div>
          <Spinner animation="border" />
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <Button variant="danger" onClick={cancelRetryHandler}>
            Cancel Retry
          </Button>
        </div>
      )}

      {!isLoading && products.length > 0 && (
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.title}</li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default Products;