import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://picsum.photos/300/200?random=11",
      "https://picsum.photos/300/200?random=12"
    ],
    reviews: [
      "Amazing colors, loved it!",
      "Great quality product",
    ],
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://picsum.photos/300/200?random=21",
      "https://picsum.photos/300/200?random=22"
    ],
    reviews: [
      "Perfect for sketches",
      "Monochrome vibe is awesome",
    ],
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://picsum.photos/300/200?random=31",
      "https://picsum.photos/300/200?random=32"
    ],
    reviews: [
      "Bright and attractive",
      "Worth the money",
    ],
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      "https://picsum.photos/300/200?random=41",
      "https://picsum.photos/300/200?random=42"
    ],
    reviews: [
      "Calm and soothing color",
      "Excellent shade",
    ],
  },
];

function ProductDetail() {
  const { productId } = useParams();

  const product = productsArr.find((p) => p.id === productId);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <Container className="mt-4">
      <h2>{product.title}</h2>
      <h4>Price: ₹{product.price}</h4>

      <Row className="mt-4">

        {/* Product Image Gallery */}
        {product.images.map((img, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card>
              <Card.Img
                src={img}
                style={{ cursor: "zoom-in" }}
                onClick={() => window.open(img, "_blank")}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="mt-4">Reviews</h3>

      <ul>
        {product.reviews.map((r, i) => (
          <li key={i}>⭐ {r}</li>
        ))}
      </ul>
    </Container>
  );
}

export default ProductDetail;