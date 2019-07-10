import { Request, Response } from "express";
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';
import { request } from "http";
import { QueryResult } from "pg";
import { placeholder } from "@babel/types";

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
    res.send(req.user);
});

router.get('/dashboard', rejectUnauthenticated, (req: Request, res: Response): void => {
    const queryText: string = `SELECT * FROM "resources";`;
    if (req.isAuthenticated()) {
        pool.query(queryText)
            .then(results => res.send(results.rows))
            .catch((err: QueryResult): void => {
                console.log(`Error getting from resources: ${err}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.post('/add-resource', rejectUnauthenticated, (req: Request, res: Response): void => {
    const queryText: string = `INSERT INTO "resources" (title, description, link) VALUES ($1, $2, $3);`;
    if (req.isAuthenticated()) {
        pool.query(queryText, [req.body.title, req.body.description, req.body.link])
            .then((response: QueryResult): void => {
                res.sendStatus(201);
            })
            .catch((err: QueryResult): void => {
                console.log(`Error positing to user: ${err}`);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.post('/register', (req: Request, res: Response, next: express.NextFunction): void => {
    const username: string | null = <string>req.body.username;
    const password: string | null = encryptPassword(req.body.password);

    const queryText: string = `INSERT INTO "admin" (first_name, last_name, email, password) VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.first_name, req.body.last_name, req.body.email, password])
        .then((response: QueryResult): void => {
            res.sendStatus(201);
        })
        .catch((err: QueryResult): void => {
            console.log(`Error saving user to database: ${err}`);
            res.sendStatus(500);
        });
});

router.post('/login', userStrategy.authenticate('local'), (req: Request, res: Response): void => {
    console.log('/login');
  res.sendStatus(200);
});

router.post('/logout', (req: Request, res: Response): void => {
    req.logout();
    res.sendStatus(200);
});

router.put('/resource/:id', (req: Request, res: Response): void => {
    const updatedInfo = req.body;
    const queryText: string = `UPDATE "resources"
                                SET "title" = $1,
                                "description" = $2,
                                "link" = $3
                                WHERE "id" = $4;`;

    const queryValues = [
        updatedInfo.title,
        updatedInfo.description,
        updatedInfo.link
    ]
    if (req.isAuthenticated()) {
        pool.query(queryText, queryValues)
            .then((response: QueryResult): void => {
                res.sendStatus(201);
            })
            .catch((err: QueryResult): void => {
                console.log(`Error updating resource: ${err}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

router.delete('/delete', rejectUnauthenticated, (req: Request, res: Response): void => {
    const queryText: string = `DELETE FROM "resources"
                                WHERE "resources_id" = $1;`;

    if (req.isAuthenticated()) {
        pool.query(queryText)
            .then((response: QueryResult): void => {
                res.sendStatus(201);
            })
            .catch((err: QueryResult): void => {
                console.log(`Error deleting: ${err}`);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

export default router;