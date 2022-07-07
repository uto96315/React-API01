// todo.route.js

import express from "express";
import { getTodoResult } from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.get("/", (req, res) => getTodoResult(req, res));
