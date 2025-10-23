import React from "react";
import { Offcanvas, Button, Row, Col } from "react-bootstrap";
import { useCart } from "../Reducer/CartContext";

const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";

function OffCanvas({ show, handleClose }) {
  const { cartState, dispatch } = useCart();

  // evenr handlers

  const handleRemove = (id) => dispatch({ type: REMOVE_ITEM, payload: { id } });
  const handleIncrease = (id) => dispatch({ type: INCREASE_QUANTITY, payload: { id } });
  const handleDecrease = (id) => dispatch({ type: DECREASE_QUANTITY, payload: { id } });

  const totalPrice = cartState.items
    .reduce((sum, item) => sum + Number(item.product.price.replace(/[$,]/g, "")) * item.quantity, 0)
    .toFixed(2);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartState.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartState.items.map((item) => (
              <div key={item.product.id} className="mb-3">
                <Row className="align-items-center">
                  <Col xs={4}>
                    <img src={item.product.img} alt={item.product.name} className="img-fluid" />
                  </Col>
                  <Col xs={8}>
                    <h6>{item.product.name}</h6>
                    <p className="mb-1">Price: {item.product.price}</p>
                    <div className="d-flex align-items-center">
                      <Button variant="outline-danger" size="sm" className="rounded-0" onClick={() => handleDecrease(item.product.id)}>-</Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button variant="outline-success" size="sm" className="rounded-0" onClick={() => handleIncrease(item.product.id)}>+</Button>
                      <Button variant="danger" size="sm" className="ms-auto rounded-0" onClick={() => handleRemove(item.product.id)}>Remove</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
            <hr />
            <div className="d-flex flex-column align-items-end gap-3">
              <div className="text-end">
                <h4>Total: ${totalPrice}</h4>
              </div>
              <button className="btn rounded-0 bg-black text-white">Continue to payment</button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvas;
