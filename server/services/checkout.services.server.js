let checkoutInfo = {
    "_id": "",
    "first": "",
    "last": "",
    "address": "",
    "email": "",
    "phone": "",
    "card": "",
    "expiration_date": "",
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
