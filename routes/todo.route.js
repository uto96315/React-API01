// todo.route.js

import express from "express";
import { readAllTodoData, createTodoData, readTodayTodoData } from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.get("/", (req, res) => readAllTodoData(req, res));
todoRouter.get("/today", (req, res) => readTodayTodoData(req, res)); // 今日の分
todoRouter.post("/", (req, res) => createTodoData(req, res));