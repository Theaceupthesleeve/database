import Todos from "../models/todos.models.js"
import mongoose from "mongoose"

const addTodo = async (req , res) => {
   
    const addTodo = async ( req, res) => req.body

    if (!title || !description) return res.status(400).json({
        message: 'title or description is required'
    })
    try { 
        const todo = await Todos.create({
            title, description
        })
        res.status(201).json({
            message:'todo added sucessfully',
            data: todo
        })    
    } catch (error) {
        res.status(500).json({
            message:'internal server error'
        })
    }
}


const getAllTodo = async (req , res) => {
    
    try {
        const todos = await Todos.find({});
        res.json({
            data: todos
        })
    } catch (error) {
        res.status(500).json({
            message: 'internal server error'
        })
    }
}

const getSingleTodo = async (req , res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: "not valid id"})

    try {
        const tood = await Todos.findById({_id: id})
        
        if (!todo) return res.status(404).json({
            message: 'not todo found '
        })
        res.json({
            data:todo
        })
    } catch (error) {
        res.status(500).json({
            message: 'internal server error'
        })
        
    }    

}
const deleteTodo = async (req , res) => {
   const { id } = req.params;

   if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error: "Not valid Id"})

    try {
        const todo = await Todos.findByIdAndDelete({ _id: id })

        if (!todo) return res.status(404).json({
            message: 'no todo found!'
        })

        res.json({
            message: 'todo deleted',
            deleteTodo: todo
        })
    } catch (error) {
        
        res.status(500).json({
            message:'internal server error'
        })
    }
}


const editTodo = async (req , res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({error:'not a valid id'});
    }

    try {
        const todo = await Todos.findOneAndUpdate(
            {_id: id},
            {
                ...req.body
            },
            {new: true}
        );

        if (!todo){
            return res.status(404).json({error: 'todo not found!'});        
        }

        res.json(todo);
    } catch (error) {
        res.status(500).json({message: 'internal server error'})
    }
}

export {addTodo , getAllTodo , getSingleTodo , deleteTodo , editTodo}











