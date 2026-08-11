const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware");
const { validateProduct } = require("../middleware/productValidation");

// Create Product
router.post(
    "/",
    verifyToken,
    validateProduct,
    productController.createProduct
);

// Get All Products
router.get("/", verifyToken, productController.getAllProducts);

router.get("/search", verifyToken, productController.searchProducts);

router.get("/page", verifyToken, productController.getProductsPaginated);

// Get Product By ID
router.get("/:id", verifyToken, productController.getProductById);

// Update Product
router.put(
    "/:id",
    verifyToken,
    validateProduct,
    productController.updateProduct
);

// Delete Product
router.delete("/:id", verifyToken, productController.deleteProduct);

module.exports = router;