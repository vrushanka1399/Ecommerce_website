import React, { useState } from 'react';
import { Modal, Button, Table, Image } from 'react-bootstrap';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

const Cart = () => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(cartElements);

  const removeItemHandler = (title) => {
    setItems((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <>
      {/* Cart icon button top right */}
      <div style={{ textAlign: 'right', margin: '20px' }}>
        <Button variant="dark" onClick={() => setShow(true)}>
          ?? Cart ({items.length})
        </Button>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr key={item.title}>
                  <td>
                    <Image
                      src={item.imageUrl}
                      width={50}
                      height={50}
                      rounded
                      className="me-2"
                    />
                    {item.title}
                  </td>
                  <td>?{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeItemHandler(item.title)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Cart;