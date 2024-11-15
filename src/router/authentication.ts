import express from 'express';

import { register } from "../controllers/authentication";

export default (router: express.Router) => {
    router.post('/auth/register', register);
    router.get('/', (req: express.Request, res: express.Response) => {
        res.status(200).send("Hello")
    });
};