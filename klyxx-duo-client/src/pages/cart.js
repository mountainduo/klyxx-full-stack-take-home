import React, {useContext} from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";
import {GlobalDispatchContext, GlobalStateContext} from "../context/GlobalContextProvider"
import Card from "../components/card";
import {Link} from "gatsby";

// Shopping Cart Page
const CartPage = () => {
  // global state and dispatch
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  return (
    <Layout>
      <SEO title="Cart"/>
      <div className="container">
        <div className="row border rounded mb-2 justify-content-between">
          <div className="col-8">Product</div>
          <div className="col-2">Quantity</div>
          <div className="col-2">Price</div>
        </div>
        {
          state.cart.map(item => {
            return (
              <div className="row border rounded pt-4 mb-2 justify-content-between">
                <div className="col-2">
                  <img className="" src={item.imageUrl} alt={item.title}/>
                </div>
                <div className="col-4">
                  <p>{item.title}</p>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <button type="button" className="btn btn-secondary"
                            onClick={() => {
                              dispatch({
                                type: 'DECREMENT_QUANTITY',
                                id: item._id
                              });
                            }}>
                      -
                    </button>
                    <input type="text" name="quantity" className="form-control rounded"
                           value={item.quantity}
                           min="1" max="100"/>
                    <button type="button" className="btn btn-secondary"
                            onClick={() => {
                              dispatch({
                                type: 'INCREMENT_QUANTITY',
                                id: item._id
                              });
                            }}>
                      +
                    </button>
                  </div>
                  <button type="button" className="btn btn-danger mt-2"
                          onClick={() => {
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              id: item._id
                            });
                          }}>
                    Remove
                  </button>
                </div>
                <div className="col-2">
                  <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
                </div>
              </div>
            )
          })
        }
        <div className="row justify-content-end">
          <div className="col-2">
            Total: ${state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-2">

            <Link
              to="/checkout"
              style={{
                color: `white`,
              }}
              state={{total: (state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0))}}>
              <button type="button" className="btn btn-success">Checkout</button>
            </Link>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage;
