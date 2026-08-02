# Product API Documentation

## Overview

The Product API provides CRUD (Create, Read, Update, Delete) operations for products.

## Database Table

### products

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary Key |
| name | TEXT | Product name |
| description | TEXT | Product description |
| price | REAL | Product price |
| created_at | DATETIME | Record creation time |

## API Endpoints

### POST /api/products

Creates a new product.

### GET /api/products

Returns all products.

### GET /api/products/:id

Returns a single product.

### PUT /api/products/:id

Updates a product.

### DELETE /api/products/:id

Deletes a product.

## Authentication

All Product API endpoints require a valid JWT token.

Authorization Header:

```
Authorization: Bearer <JWT_TOKEN>
```

## Testing

The Product API was successfully tested using Thunder Client.
