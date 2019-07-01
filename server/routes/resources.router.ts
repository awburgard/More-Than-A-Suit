import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { request } from "https";

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "resources"
                                JOIN "resources_categories"."resources_id"
                                ON "resources"."id"
                                JOIN "resources_categories"."categories_id"
                                ON "categories"."id";`;
    pool.query(queryString)
        .then((response: Object): void => {
            res.sendStatus(201);
        })
        .catch((err: Object): void => {
            console.log(`Error positing to user: ${err}`);
            res.sendStatus(500);
        })
});

//Filter for Resources Page based on User's Need
router.get('/:need', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "resources"
                                JOIN "resources_categories"."resources_id"
                                ON "resources"."id"
                                JOIN "resources_categories"."categories_id"
                                ON "categories"."id"
                                WHERE "categories"."category_name" = $1;`;
    pool.query(queryString, [req.params.need])
        .then((response: Object): void => {
            res.sendStatus(201);
        })
        .catch((err: Object): void => {
            console.log(`Error positing to user: ${err}`);
            res.sendStatus(500);
        })
});



export default router;