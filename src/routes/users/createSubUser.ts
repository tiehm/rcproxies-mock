import * as express from 'express'
import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';

// Data needed to create a user
// {
//     "email": "admin@mock.com",
//     "id": "admin",
//     "username": "admin",
//     "password": "password",
//     "data_limit": 3.0,
//     "data_used": 0,
//     "pools_allowed": [
//         "us", "eu"
//     ]
// }
export function CreateSubUser(req: express.Request, res: express.Response) {

    const data = JSON.parse(readFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), 'utf-8'))

    if (data.find(v => v.id === req.body.id)) {
        res.status(400).end()
        return
    }

    data.push(req.body)
    writeFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), JSON.stringify(data))

    res.status(201).end()

}
