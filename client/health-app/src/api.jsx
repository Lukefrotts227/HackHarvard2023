import axios from 'axios'; 
const API_URL = 'http://localhost:5000';

export const createUser = async(user) =>{
    const response = await axios.post(`${API_URL}/users/createUser`, user); 
    return response; 
}
