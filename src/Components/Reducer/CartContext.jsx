import { createContext, useContext, useReducer, useEffect, useMemo } from "react";
import { useAuth } from "./Auth/UseAuth";  

// --- Action Types ---
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const SET_CART = "SET_CART";    
const CLEAR_CART = "CLEAR_CART"; 

function cartReducer(state, action) {
  switch (action.type) {
    case SET_CART: 
      return { ...state, items: action.payload.items || [] };

    case CLEAR_CART: 
      return { ...state, items: [] };

    case ADD_ITEM: {
      const newItemPayload = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === newItemPayload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.product.id === newItemPayload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, items: updatedItems };
      } else {
        const updatedItems = [
          ...state.items,
          { product: newItemPayload, quantity: 1 },
        ];
        return { ...state, items: updatedItems };
      }
    }
    case REMOVE_ITEM: {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== action.payload.id
      );
      return { ...state, items: updatedItems };
    }
    case INCREASE_QUANTITY: {
      const updatedItems = state.items.map((item) =>
        item.product.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, items: updatedItems };
    }
    case DECREASE_QUANTITY: {
      const updatedItems = state.items
        .map((item) =>
          item.product.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, items: updatedItems };
    }
    default:
      return state;
  }
}

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth(); //  Get the current user from AuthContext
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  
  useEffect(() => {
    //loads saved cart of specific user from the l-storage on cur user
    if (currentUser) {
      const userCartKey = `cartItems_${currentUser.email}`;
      const savedCart = JSON.parse(localStorage.getItem(userCartKey)) || [];
      dispatch({ type: SET_CART, payload: { items: savedCart } });
    } else {
      // User is logged out, clear the cart
      dispatch({ type: CLEAR_CART });
    }
  }, [currentUser]);


//2
  useEffect(() => {
    if (currentUser && cartState.items.length > 0) {
      // Only save if a user is logged in and the cart isn't empty
      const userCartKey = `cartItems_${currentUser.email}`;
      localStorage.setItem(userCartKey, JSON.stringify(cartState.items));
    }
  }, [cartState, currentUser]); // This effect runs when the cart or user changes





  const value = useMemo(() => ({ cartState, dispatch }), [cartState]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};





export const useCart = () => { 
  return useContext(CartContext);
};