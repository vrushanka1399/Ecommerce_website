import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";

const productsArr = [
  { title: "Colors", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
  { title: "Black and white Colors", price: 50, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png" },
  { title: "Yellow and Black Colors", price: 70, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png" },
  { title: "Blue Color", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png" }
];

const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsHandler = async () => {
    setIsLoading(true);   // ?? show loader

    // simulate backend fetch
    setTimeout(() => {
      setItems(productsArr);   // ?? data loaded
      setIsLoading(false);     // ?? hide loader
    }, 1500);
  };

  return (
    <Container className="mt-4">

      <div className="text-center mb-3">
        <Button onClick={fetchProductsHandler}>Load Products</Button>
      </div>

      {/* ?? Show loader while fetching */}
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Loading products...</p>
        </div>
      )}

      {/* ?? Show products only when not loading */}
      {!isLoading && (
        <Row>
          {items.map((item, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>?{item.price}</Card.Text>
                  <Button>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

    </Container>
  );
};

export default Products;