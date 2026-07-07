# Task Manager - Project 4

## Overview

Task Manager is a Full Stack Web Application developed using HTML, CSS, JavaScript, Node.js, and Express.js. This project demonstrates the integration of the frontend with the backend using REST APIs. Users can add, edit, view, and delete tasks through a simple and responsive interface.

## Features

- Add New Tasks
- View All Tasks
- Edit Existing Tasks
- Delete Tasks
- Frontend and Backend Integration
- REST API Communication
- JSON-based Data Storage
- Responsive User Interface

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- CORS
- File System (fs)

## Project Structure

```
TaskManager-Project4/
│
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
├── tasks.json
├── index.html
├── style.css
├── script.js
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/taskmanager-project4.git
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
node server.js
```

The backend will run on:

```
http://localhost:5000
```

Open `index.html` using **Live Server** in Visual Studio Code.

## API Endpoints

### Get All Tasks

```
GET /tasks
```

### Add Task

```
POST /tasks
```

Example Request:

```json
{
  "name": "Complete Full Stack Project"
}
```

### Update Task

```
PUT /tasks/:id
```

Example Request:

```json
{
  "name": "Updated Task Name"
}
```

### Delete Task

```
DELETE /tasks/:id
```

## Learning Outcomes

- Frontend and Backend Integration
- REST API Development
- CRUD Operations
- Express.js Server
- JSON Data Handling
- Asynchronous JavaScript using Fetch API
- Full Stack Web Development

## Future Enhancements

- MongoDB Integration
- User Authentication
- Task Categories
- Due Dates
- Priority Levels
- Search and Filter Tasks
- Dark Mode


## License

This project was developed for educational and internship purposes.
