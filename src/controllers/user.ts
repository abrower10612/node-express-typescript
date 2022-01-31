import { Request, Response } from 'express';
import { User } from '../models/user';

export const createUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username) return res.send('Missing username');
    if (!password) return res.send('Missing password');

    const newUser: User = {
        username: username,
        password: password
    }

    res.send(`Account successfully created for ${newUser.username}.`);
}