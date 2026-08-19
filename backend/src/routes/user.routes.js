import express from "express";
import { getUser, createUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/', (req, res) => {
    console.log('User Route');
    createUser(req, res);
});

router.get('/', getUser);

router.get('/', (req, res) => {
    console.log('User Route');
    getUser(req, res);
});

router.get('/boom', (req, res) => {
    throw new Error("Boom! This is a test error.");
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({message: `User ID: ${id}`});
});

export default router;