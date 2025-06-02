//write a controller for the todos
import { supabase } from "../server.js";

//get all todos
export const getTodos = async (req, res) => {
    try {
        const { data, error } = await supabase.from("todos")
            .select("*")
            .order("created_at", { ascending: false }); //order by created_at in descending order

        //if there is an error, return a 500 status code
        if (error) {
            console.error("Error fetching todos:", error);
            return res.status(500).json({ error: "Failed to get todos" });
        }

        //if the todos are fetched successfully, return a 200 status code
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching todos:", error);
        return res.status(500).json({ error: "Failed to get todos" });
    }
}; 

//create a todo
export const createTodo = async (req, res) => {
    const { task } = req.body;

    //if the task is not provided, return a 400 status code
    if (!task) {
        return res.status(400).json({ error: "Task is required" });
    }

    //using try catch block to handle the error
    try {
        const { data, error } = await supabase.from("todos").insert([{ task, is_completed: false }]).select();

        //if there is an error, return a 500 status code
        if (error) {
            console.error("Error creating todo:", error);
            return res.status(500).json({ error: "Failed to create todo" });
        }

        //if the todo is created successfully, return a 201 status code
        return res.status(201).json(data[0]);
    } catch (error) {
        console.error("Error creating todo:", error);
        return res.status(500).json({ error: "Failed to create todo" });
    }
};

//get a todo by id
export const getTodoById = async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await supabase.from("todos").select("*").eq("id", id).single();

        //if there is an error, return a 500 status code
        if (error) {

            //searching for the todo by id but found 0
            if (error.code === "PGRST116") {
                return res.status(404).json({ error: "Todo not found" });
            }

            //if there is an error, return a 500 status code
            console.error("Error fetching todo:", error);
            return res.status(500).json({ error: "Failed to get todo" });
        }

        //if the todo is fetched successfully, return a 200 status code
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching todo:", error);
        return res.status(500).json({ error: "Failed to get todo" });
    }
};

//update a todo
export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { task, is_completed } = req.body;

    //if the task is not provided, return a 400 status code
    if (task === undefined && is_completed === undefined) {
        return res.status(400).json({ error: "Task or is_completed is required" });
    };

    //if the task is provided, update the task
    const updateData = {};
    if (task !== undefined) {
        updateData.task = task;
    };

    //if the is_completed is provided, update the is_completed
    if (is_completed !== undefined) {
        updateData.is_completed = is_completed;
    };

    //using try catch block to handle the error
    try {
        const { data, error } = await supabase.from("todos").update(updateData).eq("id", id).select();

        //if there is an error, return a 500 status code
        if (error) {
            console.error("Error updating todo:", error);
            return res.status(500).json({ error: "Failed to update todo" });
        }

        //if the todo is not found, return a 404 status code
        if (data.length === 0) {
            return res.status(404).json({ error: "Todo not found" });
        }

        //if the todo is updated successfully, return a 200 status code
        return res.status(200).json(data[0]);
    } catch (error) {
        console.error("Error updating todo:", error);
        return res.status(500).json({ error: "Failed to update todo" });
    }
};

//delete a todo
export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    
    try {
        const {error, count} = await supabase.from("todos").delete({count: "exact"}).eq("id", id);

        //if there is an error, return a 500 status code
        if(error) {
            console.error("Error deleting todo:", error);
            return res.status(500).json({error: "Failed to delete todo"});
        }

        //if the todo is not found, return a 404 status code
        if(count === 0) {
            return res.status(404).json({error: "Todo not found"});
        }

        //if the todo is deleted successfully, return a 200 status code
        return res.status(200).json({message: "Todo deleted successfully"});
    } catch (error) { 
        console.error("Error deleting todo:", error);
        return res.status(500).json({error: "Failed to delete todo"});
    }
};


