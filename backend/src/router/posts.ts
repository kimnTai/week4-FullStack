import express from "express";
import * as Controller from "../controller";

const router = express.Router();

router.get("/", Controller.Post.getPosts);

router.post("/", Controller.Post.createPosts);

router.delete("/", Controller.Post.deleteAll);

router.delete("/:id", Controller.Post.deleteById);

router.patch("/:id", Controller.Post.editPosts);

export default router;
