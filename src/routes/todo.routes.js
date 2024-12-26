import express from "express"
import { addTodo, deleteTodo, editTodo, getAllTodo, getSingleTodo } from "../controllers/todos.controllers.js"

const router = express.Router()

router.post('/todo' , addTodo)
router.post('/todo' , getAllTodo)
router.post('/todo/:id' , getSingleTodo)
router.post('/todo/:id' , deleteTodo)
router.post('/todo/:id' , editTodo)

export default router