// todo.controller.js

import { getTodo } from "../services/todo.service.js";

export const getTodoResult = async (req, res, next) => {
    try {
        const result = getTodo({})

        res.json(result);
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}