import axios from 'axios'; 
const API_URL = 'http://localhost:5000';

export const createUser = async(user) =>{
    const response = await axios.post(`${API_URL}/users/createUser`, user); 
    return response; 
}
export const getUser = async(email,password)=>{
    const response = await axios.get(`${API_URL}/users/getUser/${email}/${password}`);
    return response;
}

export const setWeight = async (user,weight)=>{
    const response = await axios.post(`${API_URL}/users/setWeight/${user}`, weight); 
    return response; 
}; 
export const setHeight = async (user,height) =>{
    const response = await axios.post(`${API_URL}/users/setHeight/${user}`, height); 
    return response; 
}; 

export const getWeight = async (user)=>{
    const response = await axios.get(`${API_URL}/users/getWeight/${user}`); 
    return response; 
}; 
export const getHeight = async (user) =>{
    const response = await axios.get(`${API_URL}/users/getWeight/${user}`); 
    return response; 
}; 

export const getName = async (user) =>{
    const response = await axios.get(`${API_URL}/users/getName/${user}`); 
    return response; 
}