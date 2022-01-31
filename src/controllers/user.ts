import { Request, Response } from 'express';
import { User } from '../models/user';

export const createUser = async (req: Request, res: Response) => {
    const { username, age, email } = req.body;

    if (!username) return res.send('Missing username');
    if (!age) return res.send('Missing age');
    if (!email) return res.send('Missing email');

    const newUser: User = {
        username,
        age,
        email
    }

    return res.json({ success: true, newUser });
}