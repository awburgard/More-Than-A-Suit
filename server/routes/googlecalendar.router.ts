import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

import init  from '../modules/googlecalendar';

const router: express.Router = express.Router();

// router.get('/', (req: Request, res: Response, next: express.NextFunction): void => {
//     const queryString: string = `SELECT * FROM "categories";`;
//     pool.query(queryString)
//         .then((response: QueryResult): void => {
//             res.send(response.rows)
//         })
//         .catch((err: Object): void => {
//             console.log(`Error getting resources: ${err}`);
//             res.sendStatus(500);
//         })
// });

// router.post('/', (req: Request, res: Response, next: express.NextFunction): void => {
//     const queryString: string = `INSERT INTO "user"
//                         ("first_name", "last_name", "zip", "phone", "email")
//                         VALUES ($1, $2, $3, $4, $5);`;
//     pool.query(queryString, [req.body.first_name, req.body.last_name, req.body.zip, req.body.phone, req.body.email])
//         .then((response: QueryResult): void => {
//             res.sendStatus(201);
//         })
//         .catch((err: QueryResult): void => {
//             console.log(`Error posting to user: ${err}`);
//             res.sendStatus(500);
//         })
// });

router.get('/event', (req: any,res: any) => {
    const googleObj: any = {
      installed : {
        client_id :"306964752032-ajk7lv9f3bd9bkeolm9rimjn5l0u9phe.apps.googleusercontent.com",
        project_id :"quickstart-1561992545091",
        auth_uri :"https://accounts.google.com/o/oauth2/auth",
        token_uri : "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url : "https://www.googleapis.com/oauth2/v1/certs",
        client_secret : "BoRtSA5AWkYfqohIVxnQo-_Z",
        redirect_uris : ["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
      }
    }

    init(googleObj, res)
});

export default router;