import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { request } from "https";

const router: express.Router = express.Router();

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `UPDATE "user"
                                SET "appointment_type" = $1,
                                "appointment_date" = $2,
                                "time" = $3
                                WHERE "id" = $4;`;
    pool.query(queryString, [req.body.appointment_type, req.body.appointment_date, req.body.time, req.params.id])
        .then((response: Object): void => {
            res.sendStatus(201);
        })
        .catch((err: Object): void => {
            console.log(`Error positing to user: ${err}`);
            res.sendStatus(500);
        })
});


export default router;