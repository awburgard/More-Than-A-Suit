import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { request } from "https";

const router: express.Router = express.Router();

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `UPDATE "user"
                                SET "height_feet" = $1,
                                "height_inches" = $2
                                "waist" = $3,
                                "weight" = $4
                                WHERE "id" = $5;`;
    pool.query(queryString, [req.body.height_feet, req.body.height_inches, req.body.waist, req.body.weight, req.params.id])
        .then((response: Object): void => {
            res.sendStatus(201);
        })
        .catch((err: Object): void => {
            console.log(`Error positing to user: ${err}`);
            res.sendStatus(500);
        })
});



export default router;