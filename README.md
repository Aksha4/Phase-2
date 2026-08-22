# Phase 2 Backend Development Project

A Node.js and Express backend application developed progressively through Weeks 1–7.

The project uses Express, SQLite, JWT authentication, bcrypt password hashing, validation, product CRUD operations, transactions, and Redis caching.

---

## Technologies Used

- Node.js
- Express.js
- SQLite
- bcryptjs
- JSON Web Token (JWT)
- dotenv
- Redis
- Docker
- Jest
- Thunder Client

---

## Project Features

### Authentication

- User registration
- Password hashing with bcrypt
- User login
- JWT token generation
- Protected API endpoints
- JWT validation
- Invalid/expired token handling

### Product Management

- Create products
- Get all products
- Get product by ID
- Update products
- Delete products
- Search products
- Pagination
- Product validation

### User-Product Relationship

Week 7 introduced a relationship between users and products.

Each newly created product can be associated with the authenticated user's ID.

```text
User
 |
 | 1
 |
 | many
 ↓
Products
