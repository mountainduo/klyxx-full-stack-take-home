const API_URL = 'http://localhost:8080/api';

export const getInventory = async () => {
  const response = await fetch(`${API_URL}/inventory`);
  return await response.json()
}
