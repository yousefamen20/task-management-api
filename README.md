# Task Management API

A RESTful API for managing tasks, built with Node.js, Express, MongoDB, and Mongoose.

## Features

- Create new tasks
- Retrieve all tasks
- Retrieve a task by ID
- Update existing tasks
- Delete tasks
- Store task data in MongoDB

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Project Structure

```text
task-management-api/
├── models/
│   └── task.js
├── routes/
│   └── tasksRouter.js
├── .env
├── app.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/yousefamen20/task-management-api.git
```

Move into the project folder:

```bash
cd task-management-api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root and add the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

## Run the Application

Start the server:

```bash
node app.js
```

The API will run at:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve a task by ID |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Example Request Body

Use this JSON object when creating or updating a task:

```json
{
  "name": "Learn Express",
  "completed": false
}
