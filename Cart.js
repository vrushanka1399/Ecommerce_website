import React, { useState, useContext } from 'react';
import { Modal, Button, Table, Image } from 'react-bootstrap';
import CartContext from './store/CartContext';

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const items = cartCtx.items;

  const [show, setShow] = useState(false);

  const removeItemHandler = (title) => {
    cartCtx.removeItem(title);
  };

  return (
    <>
      {/* Cart icon button top right */}
      <div style={{ textAlign: 'right', margin: '20px' }}>
        <Button variant="dark" onClick={() => setShow(true)}>
          ?? Cart (
          {items.reduce((total, item) => total + item.quantity, 0)}
          )
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