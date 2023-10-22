{/*api.jsx*/}
import axios from 'axios'; 
const API_URL = 'http://localhost:5000';

export const createUser = async (user) =>{
    const response = await axios.post(`${API_URL}/users/createUser`, user); 
    return response; 
}


export const getUser = async (user) =>{
    const response = await axios.post(`${API_URL}/users/login`, user); 
    return response; 
}

export const setWeight = async (user, weight) => {
    const response = await axios.post(`${API_URL}/users/setWeight/${user}`, { weight: weight }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

export const setHeight = async (user, height) => {
    const response = await axios.post(`${API_URL}/users/setHeight/${user}`, { height: height }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}


export const setAge = async (user, age) => {
    const response = await axios.post(`${API_URL}/users/setAge/${user}`, { age: age }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}


export const setFamilyHistory = async (user, familyHistory) => {
    const response = await axios.post(`${API_URL}/users/setFamilyHistory/${user}`, { familyHistory: familyHistory }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

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

export const getCongregate = async (user) =>{
    const response = await axios.get(`${API_URL}/users/getCongregate/${user}`); 
    return response; 
}
export const getLearn = async (user) =>{
    const reponse = await axios.get(`${API_URL}/users/getLearn/${user}`)
    return response; 
}

export const getData = async () =>{
    const response = await axios.get(`${API_URL}/direct/getData`); 
    return response
}

export const sendData = async (data) => {
    const response = await axios.get(`${API_URL}/direct/sendData`); 
    return response
}; 

export const options = {
    method: 'POST',
    url: 'https://api.tryterra.co/v2/auth/generateWidgetSession',
    headers: {
      accept: 'application/json',
      'dev-id': 'testingTerra',
      'content-type': 'application/json',
      'x-api-key': 'ussv5SAQ53a1nNTxsMr9G41zj2KUhYMk5eDU1hjG'
    },
    data: {
      providers: 'FREESTYLELIBRE',
      language: 'en',
      use_terra_avengers_app: false
    }
  };
  
