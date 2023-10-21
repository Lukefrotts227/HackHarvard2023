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
export const setHeight = async (user,weight) =>{
    const response = await axios.post(`${API_URL}/users/setHeight/${user}`, height); 
    return response; 
}; 

export const getWeight = async (user,weight)=>{
    const response = await axios.get(`${API_URL}/users/getWeight/${user}/${weight}`); 
    return response; 
}; 
export const getHeight = async (user,height) =>{
    const response = await axios.get(`${API_URL}/users/getWeight/${user}/${height}`); 
    return response; 
}; 

export const getName = async (user,name) =>{
    const response = await axios.get(`${API_URL}/users/getName/${user}/${name}`); 
    return response; 
}