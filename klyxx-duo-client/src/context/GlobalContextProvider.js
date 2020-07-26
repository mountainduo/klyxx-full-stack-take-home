import React from 'react'
import {getItemById} from "../services/InventoryService";

// split up state and dispatch into two providers
export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  cart: [],
}

// reducer dealing with types of cart actions
// code for incrementing/decrementing quantity based on code from this article:
// https://dev.to/aneeqakhan/building-shopping-cart-actions-and-reducers-with-redux-in5
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const index = state.cart.findIndex(item => item._id === action.newItem._id);
      // add new item to cart if cart doesn't already contain the item
      if (index === -1) {
        return {
          ...state,
          cart: [
            ...state.cart,
            action.newItem
          ]
        }
      }
      // otherwise, increase that item's quantity by 1
      else {
        state.cart[index].quantity += 1;
        return state;
      }
    case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item._id !== action.id)
        };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item => item._id === action.id ? {...item, quantity: item.quantity + 1} : item)
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item => item._id === action.id ? {...item, quantity: Math.max(item.quantity - 1, 1)} : item)
      };
    default:
      return state;
  }
}

const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

// CART HELPER FUNCTIONS

/*const addToCart = async (state, itemid) => {
  // if cart already contains the item, increase quantity by 1.
  if (state.cart.some(item => item._id === itemid)) {
    let quantity = state.cart.filter(item => item._id === itemid)[0].quantity;
    editQuantityOfItem(state, itemid, quantity + 1)
    return state;
  }
  else {
    let item = await getItemById(itemid);
    item['quantity'] = 1;
    this.setState(prevState => {
      return ({
        cart: [
          ...prevState.cart,
          item
        ]
      })
    });
  }

  console.log(this.state.cart)
}

// edit the quantity of an item in the cart
const editQuantityOfItem = (state, itemid, newQuantity) => {
  for (let i = 0; i < state.cart.length; i++) {
    if (state.cart[i]._id === itemid) {
      this.state.cart[i].quantity = newQuantity;
      break;
    }
  }
};*/

export default GlobalContextProvider
