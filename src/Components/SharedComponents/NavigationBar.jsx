import "./Nav.css";
import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

import { useCart } from "../Reducer/CartContext"; //imported usecart reducer 

// // modal Imports
import MyVerticallyCenteredModal from "./LoginModal";





//Defined actions as constants
const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";



// ----------------------------------------------------------------------------------------------------
function NavigationBar() {


  const { cartState, dispatch } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal usestate
  const [modalShow, setModalShow] = React.useState(false);
  

  // --- Cart Actions ---
  const handleRemove = (productId) => {
    dispatch({ type: REMOVE_ITEM, payload: { id: productId } });
  };
  const handleIncrease = (productId) => {
    dispatch({ type: INCREASE_QUANTITY, payload: { id: productId } });
  };
  const handleDecrease = (productId) => {
    dispatch({ type: DECREASE_QUANTITY, payload: { id: productId } });
  };

  const itemCount = cartState.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // --- PRICE CALCULATION ---
  const totalPrice = cartState.items
    .reduce((sum, item) => {
      const priceString = item.product.price.replace(/[$,]/g, "");
      const price = Number(priceString);
      return sum + price * item.quantity;
    }, 0)
    .toFixed(2); 

  // --- MUI Styled Badge ---
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${
        (theme.vars ?? theme).palette.background.paper
      }`,
      padding: "0 4px",
    },
  }));

  return (
    <div>
      <Navbar expand="lg" className="fixed-top nav-body" >
        <Container className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className=" fw-semibold">
            Forma
          </Navbar.Brand>

          <div className="cart-icon-small">
            <IconButton aria-label="cart" onClick={handleShow}>
              <StyledBadge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fs-5 gap-5 fw-semibold">
              <Nav.Link as={Link} to="/Store">
                Store
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                About
              </Nav.Link>
             
            </Nav>
            <div className="d-flex gap-5 align-items-center">
              <div className="cart-icon-large">
                <IconButton aria-label="cart" onClick={handleShow}>
                  <StyledBadge badgeContent={itemCount} color="primary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </div>
              {/* Modal  */}
              <Nav.Link >
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                <PersonIcon onClick = {() => setModalShow(true)} className="person-icon text-muted" />
                  <h5 onClick={() => setModalShow(true)} className="account text-muted mt-4">My Account</h5>
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- Offcanvas Cart --- */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartState.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartState.items.map((item) => (
                <div key={item.product.id} className="mb-3">
                  <Row className="align-items-center">
                    <Col xs={4}>
                      <img
                        src={item.product.img}
                        alt={item.product.name}
                        className="img-fluid"
                      />
                    </Col>
                    <Col xs={8}>
                      <h6>{item.product.name}</h6>
                      <p className="mb-1">Price: {item.product.price}</p>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="rounded-0"
                          onClick={() => handleDecrease(item.product.id)}
                        >
                          -
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="rounded-0"
                          onClick={() => handleIncrease(item.product.id)}
                        >
                          +
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          className="ms-auto rounded-0"
                          onClick={() => handleRemove(item.product.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
              <hr />
              <div className="d-flex flex-column  align-items-end gap-5">
                <div className="text-end">
                <h4>Total: ${totalPrice}</h4>
              </div>

              <div>
                <button className="btn rounded-0 bg-black text-white">Continue to payment</button>
              </div>
              </div>
              
            </div>

            
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default NavigationBar;

