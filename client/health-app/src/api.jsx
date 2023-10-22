import axios from 'axios'; 
const API_URL = 'http://localhost:5000';

export const createUser = async(user) =>{
    const response = await axios.post(`${API_URL}/users/createUser`, user); 
    return response; 
}
export const getUser = async(user)=>{
    const response = await axios.post(`${API_URL}/users/getUser`, {user});
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
export const setAge = async (user,age)=>{
    const response = await axios.post(`${API_URL}/users/setAge/${user}`, age); 
    return response; 
}; 
export const setFamilyHistory = async (user,familyHistory) =>{
    const response = await axios.post(`${API_URL}/users/setFamilyHistory/${user}`, familyHistory); 
    return response; 
}; 

export const getWeight = async (user)=>{
    const response = await axios.get(`${API_URL}/users/getWeight/${user}`); 
    return response; 
}; 
export const getHeight = async (user) =>{
    const response = await axios.get(`${API_URL}/users/getHeight/${user}`); 
    return response; 
}; 

export const getAge = async (user) =>{
    const response = await axios.get(`${API_URL}/users/getAge/${user}`);
    return response
};

export const getFamilyHistory = async (user) =>{
    const response = await axios.get(`${API_URL}/users/getFamilyHistory/${user}`); 
    return response; 
}

export const getName = async (user) =>{
    const response = await axios.get(`${API_URL}/users/getName/${user}`); 
    return response; 
}



export const getUserID = async (user) =>{
    const response = await axios.get(`${API_URL}/users/getUserID/${user}`)
    return response
}
export const setUserID = async (user) =>{
    const response = await axios.get(`${API_URL}/users/setUserID/${user}`)
    return response
}