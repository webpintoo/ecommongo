import express from "express";
import { authentication, random } from "../helpers";

import { createUser, getUserByEmail } from "../db/users";

export const register = async (req: express.Request, res: express.Response):Promise<any> => {
    try {
        const {email, password, username} = req.body;
        
        if(!email || !password || !username) {
            return res.sendStatus(400);
        }
        
        const existingUser = await  getUserByEmail(email);
        
        if(existingUser) {
            return res.sendStatus(400);
        }
        
        const salt = random();
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password:authentication(salt,password)
            }
        })

        return res.sendStatus(200)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}