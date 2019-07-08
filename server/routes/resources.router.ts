import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "resources"
                                JOIN "resources_categories" ON "resources_categories"."resources_id"="resources"."id"
                                JOIN "categories" ON "categories"."id" = "resources_categories"."categories_id"
                                ORDER BY "resources"."id" ASC;`;
    pool.query(queryString)
        .then((response: QueryResult): void => {
            console.log(response.rows);
            res.send(response.rows)
        })
        .catch((err: QueryResult): void => {
            console.log(`Error getting resources: ${err}`);
            res.sendStatus(500);
        })
});

//Filter for Resources Page based on User's Need
router.get('/:need', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "resources"
                                JOIN "resources_categories" ON "resources"."id"="resources_categories"."resources_id"
                                JOIN "categories" ON "resources_categories"."categories_id" = "categories"."id"
                                WHERE "categories"."category_name" = $1;`;
    pool.query(queryString, [req.params.need])
        .then((response: QueryResult): void => {
            res.send(response.rows)
        })
        .catch((err: QueryResult): void => {
            console.log(`Error getting resources from table: ${err}`);
            res.sendStatus(500);
        })
});

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    let queryString: string = `UPDATE "resources"
                                SET "title" = $1,
                                "description" = $2,
                                "link" = $3
                                WHERE "id" = $4;`;
    pool.query(queryString, [req.body.title, req.body.description, req.body.link, req.params.id])
        .then((response: QueryResult): void => {
            queryString = `UPDATE "resources_categories" SET "categories_id" = $1
                            WHERE "resources_id" = $2
                            AND "categories_id" = $3;`;
            pool.query(queryString, [req.body.categories_id, req.params.id, req.body.prevCategoriesId])
                .then((response: QueryResult): void => {
                    res.send(201);
                })
                .catch((err: QueryResult): void => {
                    console.log(`Error deleting resource: ${err}`);
                    res.sendStatus(500);
                })
        })
        .catch((err: QueryResult): void => {
            console.log(`Error updating resource: ${err}`);
            res.sendStatus(500);
        })
});

router.delete('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    let queryString: string = `DELETE FROM "resources_categories" WHERE "resources_id" = $1;`;
    const id = req.params.id;
    console.log(`DELETE RESOURCE ID: `, id);

    pool.query(queryString, [id])
        .then((response: QueryResult): void => {
            console.log(`DELETE RESOURCE JOIN`)
            queryString = `DELETE FROM "resources" WHERE "id" = $1;`;
            pool.query(queryString, [id])
                .then((response: QueryResult): void => {
                    console.log(`DELETE RESOURCE`)
                    res.send(200);
                })
                .catch((err: QueryResult): void => {
                    console.log(`Error deleting resource: ${err}`);
                    res.sendStatus(500);
                })
        })
        .catch((err: QueryResult): void => {
            console.log(`Error deleting resource: ${err}`);
            res.sendStatus(500);
        })
});

router.post('/', (req: Request, res: Response): void => {
    let queryString: string = `INSERT INTO "resources" (title, description, link) VALUES ($1, $2, $3)
                                RETURNING id;`;
    pool.query(queryString, [req.body.title, req.body.description, req.body.link])
        .then((response: QueryResult): void => {
            console.log(`Resource ID: ${response.rows[0].id}`);
            console.log(`Category ID: ${req.body.category}`);
            queryString = `INSERT INTO "resources_categories" (resources_id, categories_id)
                            VALUES ($1, $2);`;
            pool.query(queryString, [response.rows[0].id, req.body.category])
            .then((response: QueryResult): void => {
                res.send(200);
            })
            .catch((err: QueryResult): void => {
                console.log(`Error adding resource: ${err}`);
                res.sendStatus(500);
            })
        })
        .catch((err: QueryResult): void => {
            console.log(`Error adding resource ${err}`);
            res.sendStatus(500);
        })
});



export default router;