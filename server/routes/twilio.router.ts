import { Request, Response } from "express";
import express from 'express';
import { textGentleman } from '../modules/textGentleman';
import moment from 'moment'

const router: express.Router = express.Router();

router.post('/confirm/text', (req: Request, res: Response, next: express.NextFunction): void => {
    console.log(req.body)

    textGentleman(req.body.phoneNumber, `Thank you! Your appointment is at ${req.body.appointmentTime} on ${req.body.appointmentDate}`);
    res.send(200);
});



export default router;