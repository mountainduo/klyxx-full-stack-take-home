import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import CheckoutService from '../services/CheckoutService'

// checkout page
// Bootstrap styling based on example in Bootstrap documentation:
// https://getbootstrap.com/docs/4.0/components/forms/
class CheckoutPage extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    card: '',
    expiration: '',
    cvv: '',
  };

  // helper function for storing form data in state
  updateField(currentKey, newValue) {
    this.setState(prevState => (
      {
        ...prevState,
        [currentKey]: newValue
      }
    ))
  }

  // helper for sending checkout information to server via CheckoutService
  completeCheckout() {
    CheckoutService.submitCheckout({
      _id: new Date().getUTCMilliseconds(),
      ...this.state
    })
      .then(response => alert('Successfully purchased'))
      .catch(e => alert(e.message))
  }

  render() {
    return (
      <Layout>
        <SEO title="Checkout"/>
        <div className="container">
          <h2>Checkout</h2>
          <p>Cart Total: ${this.props.location.state ? this.props.location.state.total : 0}</p>
          <hr className="mb-4"/>
          <form>
            <h5>Billing/Shipping Address</h5>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="John" required
                       onChange={(e) => this.updateField("firstName", e.target.value)}/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Smith" required
                       onChange={(e) => this.updateField("lastName", e.target.value)}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail4">Email Address</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="johnsmith87@gmail.com"
                     required onChange={(e) => this.updateField("email", e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required
                     onChange={(e) => this.updateField("street", e.target.value)}/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" placeholder="Brooklyn" required
                       onChange={(e) => this.updateField("city", e.target.value)}/>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control" required
                        onChange={(e) => this.updateField("state", e.target.value)}>
                  <option>NY</option>
                  <option>MA</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip Code</label>
                <input type="text" className="form-control" id="inputZip" placeholder="11207" required
                       onChange={(e) => this.updateField("zip", e.target.value)}/>
              </div>
            </div>
            <h4>Credit Card Information</h4>
            <div className="form-group">
              <label htmlFor="inputCreditCard">Credit Card Number</label>
              <input type="text" className="form-control" id="inputCreditCard" required
                     onChange={(e) => this.updateField("card", e.target.value)}/>
            </div>
            <div className="form-row">
              <div className="col-md-2">
                <label htmlFor="inputExpiration">Expiration Date</label>
                <input type="text" className="form-control" id="inputExpiration" required
                       onChange={(e) => this.updateField("expiration", e.target.value)}/>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputCvv">CVV</label>
                <input type="text" className="form-control" id="inputCvv" required
                       onChange={(e) => this.updateField("cvv", e.target.value)}/>
              </div>
            </div>
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit"
                    onClick={() => this.completeCheckout()}>
              Checkout
            </button>
          </form>
        </div>
      </Layout>
    )
  }
};

export default CheckoutPage;
