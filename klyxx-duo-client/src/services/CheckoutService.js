const API_URL = 'http://localhost:8080/api';

export const submitCheckout = (checkout) =>
  fetch(`${API_URL}/checkout`, {
    method: 'POST',
    body: JSON.stringify(checkout),
    headers: {
      'content-type': 'application/json'
    }
  })

export default {submitCheckout}
