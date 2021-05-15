import express from "express";

import UserController from './controllers/userController'

const router = express.Router();

router.post("/register", UserController.create);

export default router