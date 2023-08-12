import axios from 'axios';

const API_URL = '/api/users/';

//Register user
// const register = async (userData) => {
//   const response = await axios.post(API_URL, userData);

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }

//   return response.data;
// };
const register = async (userData) => {
  try {
    console.log('Sending API request:', userData);
    const response = await axios.post(API_URL, userData);
    console.log('API response:', response.data);

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};

//logout user

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
};

export default authService