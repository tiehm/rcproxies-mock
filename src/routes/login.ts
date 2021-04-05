import * as express from 'express'

export function Login(req: express.Request, res: express.Response) {

    const email = process.env.EMAIL
    const password = process.env.PASSWORD

    // If the given email or password do not match with the environment, we'll refuse
    // to log them in
    if (req.body.email !== email || req.body.password !== password) {
        res.status(403).end()
        return
    }

    res.json({
        token: process.env.TOKEN
    })

}
