import * as express from 'express'
import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';

export function UpdateSubUser(req: express.Request, res: express.Response) {

    const data = JSON.parse(readFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), 'utf-8'))

    const user= data.find(v => v.username === req.params['username'])
    const index = data.findIndex(v => v => v.username === req.params['username'])
    if (!user) {
        res.status(400).end()
        return
    }

    if (req.body.password) {
        user.password = req.body.password
    }
    if (req.body.data_limit) {
        user.data_limit = req.body.data_limit
    }
    if (req.body.data_used) {
        user.data_used = req.body.data_used
    }
    if (req.body.id) {
        user.id = req.body.id
    }
    if (req.body.pools_allowed) {
        user.pools_allowed = req.body.pools_allowed
    }
    data[index] = user

    writeFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), JSON.stringify(data))

    res.status(200).end()

}
