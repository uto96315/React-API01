// routes/slack.route.js

import express from "express";
import {
  sendAllTodoData,
  sendTodayTodoData,
} from "../controllers/slack.controller.js";

export const slackRouter = express.Router();

slackRouter.get("/all", (req, res) => sendAllTodoData(req, res));
slackRouter.get("/today", (req, res) => sendTodayTodoData(req, res));