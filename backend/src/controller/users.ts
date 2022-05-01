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
}

export default new UsersController();
