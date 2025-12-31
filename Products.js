import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function Products() {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Products</h2>

      <Row>
        {productsArr.map((item) => (
          <Col md={3} key={item.id} className="mb-4">

            {/* 👇 Entire card is clickable */}
            <Link
              to={`/products/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>₹{item.price}</Card.Text>

                  {/* Add to Cart button (no logic yet, as per task) */}
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Link>

          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;