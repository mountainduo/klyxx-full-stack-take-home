let checkoutInfo = {
    "_id": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "street": "",
    "city": "",
    "state": "",
    "zip": "",
    "card": "",
    "expiration": "",
    "cvv": "",
};

// get checkout information
getCheckoutInfo = () => checkoutInfo;

// complete checkout
submitCheckout = (info) => {
    checkoutInfo = info;

}

module.exports = {
    getCheckoutInfo,
    submitCheckout
}
