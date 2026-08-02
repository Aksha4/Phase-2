const db = require("../database/database");

// Create Product
const createProduct = (name, description, price, callback) => {
    const sql = `
        INSERT INTO products (name, description, price)
        VALUES (?, ?, ?)
    `;

    db.run(sql, [name, description, price], function (err) {
        callback(err, this?.lastID);
    });
};

// Get All Products
const getAllProducts = (callback) => {
    const sql = `SELECT * FROM products`;

    db.all(sql, [], callback);
};

// Get Product by ID
const getProductById = (id, callback) => {
    const sql = `SELECT * FROM products WHERE id = ?`;

    db.get(sql, [id], callback);
};

// Update Product
const updateProduct = (id, name, description, price, callback) => {
    const sql = `
        UPDATE products
        SET name = ?, description = ?, price = ?
        WHERE id = ?
    `;

    db.run(sql, [name, description, price, id], callback);
};

// Delete Product
const deleteProduct = (id, callback) => {
    const sql = `DELETE FROM products WHERE id = ?`;

    db.run(sql, [id], callback);
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};