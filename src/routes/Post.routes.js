import express from "express";
import { createPost, getAllPosts, getPostById, updatePostById, deletePostById } from "../controllers/Post.controller.js";

const router = express.Router();

router.post("/create-post", createPost);

router.get("/posts", getAllPosts);

router.get("/posts/:id", getPostById);

router.put("/posts/:id", updatePostById);

router.delete("/posts/:id", deletePostById);

export default router;
