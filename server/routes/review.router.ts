import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { request } from "https";

const router: express.Router = express.Router();

router.get('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "user";`;
    pool.query(queryString, [req.body.need, req.params.id])
        .then((response: Object): void => {
            res.sendStatus(201);
        })
        .catch((err: Object): void => {
            console.log(`Error positing to user: ${err}`);
            res.sendStatus(500);
        })
});

router.put('/review/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `UPDATE "user"
                                SET "first_name" = $1,
                                "last_name" = $2,
                                "zip" = $3,
                                "phone" = $4,
                                "email" = $5,
                                "height_feet" = $6,
                                "height_inches" = $7,
                                "waist" = $8,
                                "weight" = $9
                                "need" = $10
                                WHERE "id" = $11;`;
    pool.query(queryString, [req.body.first_name, req.body.last_name, req.body.zip,
    req.body.phone, req.body.email, req.body.height_feet, req.body.height_inches,
    req.body.waist, req.body.weight, req.body.need, req.params.id])
        .then((response: Object): void => {
            res.sendStatus(201);
        })
        .catch((err: Object): void => {
            console.log(`Error positing to user: ${err}`);
            res.sendStatus(500);
        })
});



export default router;