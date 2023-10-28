//with help axios npm i axious or we can use js fetch function 
import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try {
        const response = await axios.post(`${url}/signup`, data); // Change from URL to url
        console.log('Server Response:', response.data);
        return response;
    } catch (error) {
        console.log('Error while calling signup api', error);
    }
}


export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}

export const payUsingPaytm = async (data) => {
    try{
        let response = await axios.post(`${url}/payment`, data);
        return response.data;
    }catch(error) {
        console.log('Error while calling payment api', error);
    }
}