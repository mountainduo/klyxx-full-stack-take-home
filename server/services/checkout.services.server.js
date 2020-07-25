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

getCheckoutInfo = () => checkoutInfo;

submitCheckout = (info) => {
    checkoutInfo = info;
}

module.exports = {
    getCheckoutInfo,
    submitCheckout
}
