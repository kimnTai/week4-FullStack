import { Request, Response } from "express";
import * as Model from "../model";

class UsersController {
    async getUsers(req: Request, res: Response): Promise<void> {
        const { limit } = req.query;
        const result = await Model.Users.find()
            .sort("-createdAt")
            .limit(Number(limit) ?? 10);
        res.send({ status: "success", result });
    }

    async createUsers(req: Request, res: Response): Promise<void> {
        const { name, email, photo } = req.body;
        try {
            const result = await Model.Users.create({ name, email, photo });
            res.send({ status: "success", result });
        } catch (error: any) {
            res.status(400).send({ status: "error", message: error.message });
        }
    }
}

export default new UsersController();
