import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

const router: express.Router = express.Router();

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `UPDATE "gentleman"
                                SET "appointment_type" = $1,
                                "appointment_date" = $2,
                                "appointment_time" = $3
                                WHERE "id" = $4;`;
    pool.query(queryString, [req.body.appointment_type, req.body.appointment_date, req.body.appointment_time, req.params.id])
        .then((response: QueryResult): void => {
            res.sendStatus(201);
        })
        .catch((err: QueryResult): void => {
            console.log(`Error updating gentleman: ${err}`);
            res.sendStatus(500);
        })
});

// router.get('/', (req: Request, res: Response, next: express.NextFunction): void => {
//     const queryString: string = `SELECT * FROM "categories";`;
//     pool.query(queryString)
//         .then((response: Object): void => {
//             res.sendStatus(201);
//         })
//         .catch((err: Object): void => {
//             console.log(`Error getting resources: ${err}`);
//             res.sendStatus(500);
//         })
// })


export default router;