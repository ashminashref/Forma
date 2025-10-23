import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { useAuth } from '../Reducer/Auth/UseAuth'; 
import { useCart } from '../Reducer/CartContext';

function MyVerticallyCenteredModal({ show, onHide }) {
  const { isAuthenticated, currentUser, signup, login, logout } = useAuth();
  const { cartState } = useCart();

  const [isLoginView, setIsLoginView] = useState(true);

  // State 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthAction = () => {
    if (isLoginView) {
      if (login(email, password)) {
        onHide(); 
      }
    } else {
      if (signup(email, username, password)) {
        onHide(); 
      }
    }
    
    setEmail('');
    setUsername('');
    setPassword('');
  };
  
  const handleLogout = () => {
    logout();
    onHide(); 
  }

  
  const LoggedInView = () => (
    <>
      <Modal.Header closeButton >
        <Modal.Title>Aye {currentUser?.username}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor:'#a0cbe712'}}>
        <p> Email: {currentUser?.email}</p>
        <h6>Your Cart Summary</h6>
        {cartState.items.length > 0 ? (
          <ul>
            {cartState.items.map(item => (
              <li key={item.product.id}>
                {item.product.name} (x{item.quantity})
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="d-grid gap-2 mt-4">
          <button className='btn rounded-0 text-white' style={{backgroundColor:'red'}}  onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </Modal.Body>
    </>
  );

  
  const LoggedOutView = () => (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {isLoginView ? 'LOGIN' : 'SIGN UP'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Enjoy members-only access to exclusive products and more.</p>
        <div className="d-flex gap-3 mb-3">
          {/* Social login buttons can be implemented here */}
          <button type="button" className="btn border rounded-0 btn-sm"><GoogleIcon sx={{ color: 'green' }} /></button>
          <button type="button" className="btn border rounded-0 btn-sm"><FacebookIcon sx={{ color: 'blue' }} /></button>
          <button type="button" className="btn border rounded-0 btn-sm"><AppleIcon sx={{ color: 'black' }} /></button>
        </div>
        <div className="input-fields d-flex flex-column gap-3">
          <input
            type="email"
            className="form-control rounded-0"
            placeholder="EMAIL ADDRESS *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isLoginView && ( 
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="USERNAME *"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="password" 
            className="form-control rounded-0"
            placeholder="PASSWORD *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-grid gap-2 mt-2">
            <Button variant="dark" className="text-uppercase rounded-0" onClick={handleAuthAction}>
              {isLoginView ? 'Continue to Login' : 'Create Account'}
            </Button>
          </div>
          <p className="text-center mt-2" style={{ cursor: 'pointer' }} onClick={() => setIsLoginView(!isLoginView)}>
            {isLoginView ? `Don't have an account? Sign Up` : "Already have an account? Login"}
          </p>
        </div>
      </Modal.Body>
    </>
  );

  return (
    <Modal show={show} onHide={onHide} size="md" centered className="text-black">
      {isAuthenticated ? <LoggedInView /> : <LoggedOutView />}
    </Modal>
  );
}

export default MyVerticallyCenteredModal;