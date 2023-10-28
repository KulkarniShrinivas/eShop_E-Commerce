
//install npm i body-parser
//with this we can handle post api because new express version cant handle body parser we need to import seperately 
//and import in index.js

//validate te userschema data that we got from frontend
//500 internal server error

import { response } from "express";
import User from "../model/user-schema.js";

//We need to make sure that username should not be duplicated or double however I have added check in user-schema
        //if we add duplicate username will not get error in front end but in backend so to avoid that below we perform this
        export const userSignup = async (request, response) => {
            try {
                const exist = await User.findOne({ username: request.body.username });
                if (exist) {
                    return response.status(401).json({ message: 'User already exists' });
                }
        
                const user = request.body;
                const newUser = new User(user);
                await newUser.save();
        
                response.status(200).json({ message: user });
            } catch (error) {
                response.status(500).json({ message: error.message });
            }
        }
        

export const userLogin = async (request, response) => {
    try {
        const username = request.body.username;
        const password = request.body.password;

        const user = await User.findOne({ username: username, password: password });

        if (user) {
            return response.status(200).json({ data: user });
        } else {
            return response.status(401).json({ message: 'Invalid login' });
        }
    } catch (error) {
        response.status(500).json({ message: 'Error', error: error.message });
    }
}

//so after user logging in sucessfull will add in logindilog whats the response and get logged the user 
