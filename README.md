# Backend Development Project

## Overview

This project is a Node.js and Express backend application developed as part of the backend development syllabus.

## Features

- Express.js server
- SQLite database
- User registration
- User login
- Password hashing with bcryptjs
- JWT authentication
- Protected API routes
- Request logging
- Environment variables using dotenv

## Technologies Used

- Node.js
- Express.js
- SQLite3
- bcryptjs
- jsonwebtoken
- dotenv

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PORT=3000
JWT_SECRET=your_secret_key
```

4. Run the migration:

```bash
node src/migrations/migrate.js
```

5. Start the server:

```bash
node app.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Home |
| GET | /about | About |
| GET | /contact | Contact |
| GET | /health | Health Check |
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/profile | Protected Profile |

## Authentication

Protected endpoints require an Authorization header:

```
Authorization: Bearer <JWT_TOKEN>
```

## Product API

The application provides CRUD operations for products.

### Create Product

**POST** `/api/products`

### Get All Products

**GET** `/api/products`

### Get Product By ID

**GET** `/api/products/:id`

### Update Product

**PUT** `/api/products/:id`

### Delete Product

**DELETE** `/api/products/:id`

## Authentication

All Product API endpoints are protected using JWT authentication.

Include the following header when accessing protected routes:

```text
Authorization: Bearer <JWT_TOKEN>
```

## Technologies Used

- Node.js
- Express.js
- SQLite3
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- Thunder Client

## Week 6 Product API Features

### Product Validation

Product creation and updates validate:

- Product name is required.
- Price must be a positive number.

Invalid requests return HTTP 400 responses.

### Product Search

Search products by name:

GET /api/products/search?name=keyboard

Requires JWT authentication.

### Product Pagination

Retrieve products using pagination:

GET /api/products/page?page=1&limit=5

Parameters:

- `page` - Page number
- `limit` - Number of products per page

Example:

GET /api/products/page?page=1&limit=2

Requires JWT authentication.

### Week 6 Testing

The following features were tested using Thunder Client:

- Product validation
- Product search
- Product pagination
- JWT authentication
