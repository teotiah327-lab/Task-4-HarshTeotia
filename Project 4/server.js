const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const FILE_NAME = "tasks.json";

// Read Tasks
function readTasks() {

    if (!fs.existsSync(FILE_NAME)) {
        fs.writeFileSync(FILE_NAME, "[]");
    }

    const data = fs.readFileSync(FILE_NAME);

    return JSON.parse(data);

}

// Save Tasks
function saveTasks(tasks) {

    fs.writeFileSync(
        FILE_NAME,
        JSON.stringify(tasks, null, 2)
    );

}

// Home Route
app.get("/", (req, res) => {

    res.send("Task Manager Backend Running");

});

// Get All Tasks
app.get("/tasks", (req, res) => {

    const tasks = readTasks();

    res.json(tasks);

});

// Add Task
app.post("/tasks", (req, res) => {

    const { name } = req.body;

    if (!name) {

        return res.status(400).json({
            message: "Task name required"
        });

    }

    const tasks = readTasks();

    const task = {

        id: Date.now(),

        name

    };

    tasks.push(task);

    saveTasks(tasks);

    res.status(201).json(task);

});

// Update Task
app.put("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const { name } = req.body;

    const tasks = readTasks();

    const task = tasks.find(
        task => task.id === id
    );

    if (!task) {

        return res.status(404).json({
            message: "Task not found"
        });

    }

    task.name = name;

    saveTasks(tasks);

    res.json(task);

});

// Delete Task
app.delete("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const tasks = readTasks();

    const updatedTasks = tasks.filter(
        task => task.id !== id
    );

    saveTasks(updatedTasks);

    res.json({
        message: "Task Deleted"
    });

});

// Start Server
app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});