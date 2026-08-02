const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware");

// Create Product
router.post("/", verifyToken, productController.createProduct);

// Get All Products
router.get("/", verifyToken, productController.getAllProducts);

// Get Product By ID
router.get("/:id", verifyToken, productController.getProductById);

// Update Product
router.put("/:id", verifyToken, productController.updateProduct);

// Delete Product
router.delete("/:id", verifyToken, productController.deleteProduct);

module.exports = router;