const API_URL = "http://localhost:5000/tasks";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load Tasks
async function loadTasks() {

    const response = await fetch(API_URL);

    const tasks = await response.json();

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.innerHTML = `

            <span>${task.name}</span>

            <div>

                <button onclick="editTask('${task.id}','${task.name}')">

                    Edit

                </button>

                <button onclick="deleteTask('${task.id}')">

                    Delete

                </button>

            </div>

        `;

        taskList.appendChild(li);

    });

}

// Add Task
async function addTask() {

    const name = taskInput.value.trim();

    if(name === ""){

        alert("Enter a task");

        return;

    }

    await fetch(API_URL,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            name

        })

    });

    taskInput.value="";

    loadTasks();

}

// Delete Task
async function deleteTask(id){

    await fetch(`${API_URL}/${id}`,{

        method:"DELETE"

    });

    loadTasks();

}

// Edit Task
async function editTask(id,currentTask){

    const updatedTask=prompt(

        "Edit Task",

        currentTask

    );

    if(updatedTask===null || updatedTask===""){

        return;

    }

    await fetch(`${API_URL}/${id}`,{

        method:"PUT",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify({

            name:updatedTask

        })

    });

    loadTasks();

}

loadTasks();