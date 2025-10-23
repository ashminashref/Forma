import React, { useState } from 'react'; // <-- Import useState
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Products } from '../Products/Product';
import { useCart } from '../Reducer/CartContext';
import { useAuth } from '../Reducer/Auth/UseAuth'; // <-- Import useAuth
import MyVerticallyCenteredModal from '../SharedComponents/LoginModal'; // <-- Import the modal
import './StoreHero.css';
import { Link } from 'react-router-dom';

function StoreHero() {
  const { dispatch } = useCart();
  const { isAuthenticated } = useAuth(); // <-- Get auth state
  const [showLoginModal, setShowLoginModal] = useState(false); // <-- State for modal

  const handleAddToCart = (product) => {
    if (isAuthenticated) {
      // If logged in, add to cart
      dispatch({ type: 'ADD_ITEM', payload: product });
      alert(`${product.name} added to cart!`);
    } else {
      // If not logged in, show the login modal
      setShowLoginModal(true);
    }
  };

  return (
    <div>
      <Container className='mt-5 pt-5 text-black'>
        <h1 style={{ fontSize: 'var(--sub-heading)' }}>Store</h1>
        <a href="" className='btn pt-4 fw-semibold'>All</a>
        <hr />
        <Row>
          {Products.map((product) => (
            <Col lg={4} md={6} key={product.id}>
              <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  className='product-img'
                  src={product.img}
                  alt={product.name}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '1 / 1', cursor: 'pointer' }}
                />
                <h5 className='fw-semibold mt-2'>{product.name}</h5>
              </Link>

              <button
                className='mb-4 btn bg-black d-flex justify-content-between rounded-0 text-white shop-btn w-100'
                onClick={() => handleAddToCart(product)}
              >
                <p className='m-0'>ADD TO CART</p>
                <p className='m-0'>{product.price}</p>
              </button>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Add the modal component here. It will only show when showLoginModal is true. */}
      <MyVerticallyCenteredModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
      />
    </div>
  );
}

export default StoreHero;