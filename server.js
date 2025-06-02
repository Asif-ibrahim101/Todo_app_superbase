//importign the modules
import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import todosRouter from "./router/todos.route.js";
let port = process.env.PORT || 3000;

//local environment variables
dotenv.config();

//creating the express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//initializing the database or supabsae in that case
let supabaseUrl = process.env.SUPABASE_URL;
let supabaseKey = process.env.SUPABASE_ANON_KEY;

//if the supabase url and key are not set, throw an error
if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL and key are not set");
};

//creating the supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

//routes
app.use('/api/todos', todosRouter);

//listening to the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});