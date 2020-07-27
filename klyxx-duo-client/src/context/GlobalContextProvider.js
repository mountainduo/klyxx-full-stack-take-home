import React from 'react'
import {getItemById} from "../services/InventoryService";

// Split up state and dispatch into two providers for performance and separation of concern
export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

// Initial state with no cart items
const initialState = {
  cart: [],
}

// Reducer dealing with types of cart actions
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

// Using as wrapper for global state and dispatch. See gatsby-ssr.js. For the purposes of this assignment, cart info
// is saved on a global state that persists between separate pages. Inspired by:
// https://dev.to/changoman/gatsby-js-global-state-w-react-context-usereducer-3c1#:~:text=TLDR%3A%20In%20order%20to%20get,around%20any%20components.
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

export default GlobalContextProvider
