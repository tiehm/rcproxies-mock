import * as express from 'express'
import { readFileSync } from 'fs';
import * as path from 'path';

export function GetAllSubUsers(req: express.Request, res: express.Response) {

    const data = JSON.parse(readFileSync(path.join(__dirname, '../', '../', '../', 'data/', 'data.json'), 'utf-8'))

    res.json(data);

}
