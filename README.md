# Node.js User CRUD API

A simple RESTful API for user management built with Node.js, Express, and TypeScript.  
Supports full CRUD operations (Create, Read, Update, Delete) for users, with in-memory storage.

## Features

- Create user
- List all users
- Get user by ID
- Update user
- Delete user

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/seu-usuario/api-crud-node.git
cd api-crud-node
npm install
```

### Running the Project

Compile TypeScript:

```bash
npx tsc
```

Start the server:

```bash
node dist/server.js
```

The API will be available at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|----------------------|
| POST   | /users           | Create a new user    |
| GET    | /users           | List all users       |
| GET    | /users/:id       | Get user by ID       |
| PUT    | /users/:id       | Update user by ID    |
| DELETE | /users/:id       | Delete user by ID    |

### Example Request (Create User)

POST `/users`  
Body (JSON):
```json
{
  "name": "Maria",
  "email": "maria@email.com"
}
```

## License

MIT