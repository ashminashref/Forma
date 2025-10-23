import React, { useState } from 'react'; // <-- Import useState
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Products } from '../Products/Product';
import { useCart } from '../Reducer/CartContext';
import { useAuth } from '../Reducer/Auth/UseAuth';
import MyVerticallyCenteredModal from '../SharedComponents/LoginModal'; 
import NavigationBar from '../SharedComponents/NavigationBar';
import Footer from '../SharedComponents/Footer';

import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const { isAuthenticated } = useAuth(); // <-- Get auth state
  const [showLoginModal, setShowLoginModal] = useState(false); // <-- State for modal

  const product = Products.find((p) => p.id === parseInt(id));

  const handleAddToCart = (product) => {
    if (isAuthenticated) {
      // If logged in, add to cart
      dispatch({ type: 'ADD_ITEM', payload: product });
      alert(`${product.name} added to cart`);
    } else {
      // If not logged in, show the login modal
      setShowLoginModal(true);
    }
  };

  if (!product) {
    return (
      <Container className='mt-5 pt-5'>
        <h2>Product not found!</h2>
      </Container>
    );
  }

  return (
    <div>
      <NavigationBar />

      <Container className='mt-5 pt-5 text-black'>
        <Row>
          <Col md={6}>
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-between ">
            <div>
              <p className="lead fw-semibold w-75" >{product.description}</p>
            </div>
            <div>
              <h1 style={{ fontSize: '80px' }} className='fw-bold'>{product.name}</h1>
              <h2 className='my-3'>{product.price}</h2>
              <button
                className='mb-4 btn bg-black d-flex justify-content-between rounded-0 w-100 text-white shop-btn'
                onClick={() => handleAddToCart(product)}
              >
                <p className='m-0'>ADD TO CART</p>
                <p className='m-0'>{product.price}</p>
              </button>
            </div>
          </Col>
        </Row>

        <div className='mt-5 pt-5'>
          <h5>Details</h5>
          <ol type='1' className='p-0 mt-5 d-flex justify-content-between border-bottom' >
            <h1 className='p-0'>Description</h1>
            <h4>{product.description}</h4>
          </ol>
          <ol type='1' className='p-0 mt-5 d-flex justify-content-between border-bottom' >
            <h1 className='p-0'>Dimension</h1>
            <h4>{product.dimension}</h4>
          </ol>
          <ol type='1' className='p-0 mt-5 d-flex justify-content-between border-bottom' >
            <h1 className='p-0'>Material</h1>
            <h4>{product.material}</h4>
          </ol>
        </div>
      </Container>

      <Footer />

      {/* Add the modal component here as well */}
      <MyVerticallyCenteredModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
      />
    </div>
  );
}

export default ProductDetail;