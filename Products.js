import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const retryTimer = useRef(null);

  // 🔹 1) Memoized fetch function
  const fetchProductsHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("https://swapi.dev/api/films");

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      setProducts(data.results);
      setIsLoading(false);

      if (retryTimer.current) clearTimeout(retryTimer.current); // stop retry when success

    } catch (err) {
      setIsLoading(false);
      setError("Something went wrong...Retrying");

      retryTimer.current = setTimeout(() => {
        fetchProductsHandler();           // 🔁 retry after 5 sec
      }, 5000);
    }
  }, []);

  // 🔹 2) Auto-call API on page load
  useEffect(() => {
    fetchProductsHandler();
    return () => {
      if (retryTimer.current) clearTimeout(retryTimer.current);
    };
  }, [fetchProductsHandler]);

  // 🔹 3) Optional performance optimization
  const totalProducts = useMemo(() => products.length, [products]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={() => clearTimeout(retryTimer.current)}>
            Cancel Retry
          </button>
        </div>
      )}

      {!isLoading && !error && (
        <>
          <p>Total products: {totalProducts}</p>

          <ul>
            {products.map((p, i) => (
              <li key={i}>{p.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Products;