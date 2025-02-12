# WhatBytes Assignment

## Overview
This is a modular Node.js backend project built with **Express**, **TypeScript**, and **Prisma**. It follows a structured architecture with controllers, services, repositories, middlewares, and utility functions for better maintainability. The database used is **PostgreSQL**, running inside a **Docker container**.

---

## Folder Structure

```
whatbytes-assignment/
│── prisma/               # Database schema & migrations
│   ├── migrations/       # Migration files
│   ├── schema.prisma     # Prisma schema definition
│
│── src/
│   ├── config/           # Configuration files
│   │   ├── database.ts   # Prisma client configuration
│   │   ├── env.ts        # Environment variables configuration
│   │   ├── logger.ts     # Winston logger setup
│   │
│   ├── controllers/      # Controllers handling API requests
│   │   ├── authController.ts
│   │   ├── userController.ts
│   │   ├── taskController.ts
│   │   ├── projectController.ts
│   │   ├── index.ts
│   │
│   ├── middlewares/      # Express middlewares
│   │   ├── authMiddleware.ts
│   │   ├── errorMiddleware.ts
│   │   ├── index.ts
│   │
│   ├── repositories/     # Database interaction layer
│   │   ├── crud-repository.ts
│   │   ├── user-repository.ts
│   │   ├── task-repository.ts
│   │   ├── project-repository.ts
│   │   ├── index.ts
│   │
│   ├── routes/           # Express routes
│   │   ├── v1/           # API versioning
│   │   │   ├── authRoutes.ts
│   │   │   ├── userRoutes.ts
│   │   │   ├── taskRoutes.ts
│   │   │   ├── projectRoutes.ts
│   │   │   ├── index.ts
│   │   ├── index.ts
│   │
│   ├── services/         # Business logic layer
│   │   ├── user-service.ts
│   │   ├── task-service.ts
│   │   ├── project-service.ts
│   │   ├── index.ts
│   │
│   ├── utils/            # Utility functions
│   │   ├── jwtUtils.ts   # JWT-based authentication utilities
│   │   ├── index.ts
│   │
│   ├── index.ts          # Main entry point
│
│── docker-compose.yml    # Docker configuration for PostgreSQL
│── .env                  # Environment variables (not pushed to GitHub)
│── .gitignore            # Ignored files in Git
│── package.json          # Dependencies and scripts
│── tsconfig.json         # TypeScript configuration
```

---

## Setup & Installation

### Prerequisites
- Node.js (>=16)
- Docker & Docker Compose
- PostgreSQL (if running locally)

### Installation Steps

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd whatbytes-assignment
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   
   # Local Development Database URL (based on docker-compose)
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/db?schema=public"
   JWT_SECRET="your_secret_key"
   PORT=3000
   ```

4. **Start PostgreSQL with Docker:**
   ```sh
   docker-compose up -d
   ```

5. **Run Prisma migrations:**
   ```sh
   npx prisma migrate dev
   ```

6. **Start the server:**
   ```sh
   npm run dev
   ```

---

## API Endpoints

### Authentication Routes
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Authenticate user & generate token

### User Routes
- `GET /api/v1/user/` - Get all users
- `GET /api/v1/user/:id` - Get user by ID
- `PUT /api/v1/user/:id` - Update user by ID
- `DELETE /api/v1/user/:id` - Delete user by ID

### Task Routes
- `POST /api/v1/task/` - Create a new task
- `GET /api/v1/task/:projectId` - Get tasks by project ID
- `PUT /api/v1/task/:id` - Update task by ID
- `DELETE /api/v1/task/:id` - Delete task by ID

### Project Routes
- `POST /api/v1/project/` - Create a new project
- `GET /api/v1/project/` - Get all projects
- `PUT /api/v1/project/:id` - Update project by ID
- `DELETE /api/v1/project/:id` - Delete project by ID

---

## TypeScript Configuration
The project uses TypeScript. Key settings in `tsconfig.json`:
- `rootDir: "./src"` - Source code location
- `outDir: "./build"` - Compiled output location
- `strict: true` - Enables strict type checking

To compile TypeScript manually:
```sh
npx tsc
```

---

## Dependencies Breakdown

### Main Dependencies
- **Express** - Web framework for Node.js
- **Prisma** - Database ORM for PostgreSQL
- **bcryptjs** - Hashing passwords securely
- **jsonwebtoken** - Handling JWT authentication
- **cookie-parser** - Parsing cookies in requests
- **cors** - Handling cross-origin requests
- **dotenv** - Managing environment variables
- **winston** - Logging library

### Dev Dependencies
- **TypeScript** - Typed JavaScript
- **ts-node** - Run TypeScript files directly
- **tsc-watch** - Auto-recompile TypeScript on changes
- **@types/express** - TypeScript definitions for Express
- **@types/node** - TypeScript definitions for Node.js
- **@types/jsonwebtoken** - TypeScript definitions for JWT
- **@types/bcryptjs** - TypeScript definitions for bcryptjs
- **@types/winston** - TypeScript definitions for Winston

---

## Running in Production

To build and start the project in production mode:
```sh
npm run build
npm start
```

---
