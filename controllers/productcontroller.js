// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CREATE - Add a new product
// POST /api/products
router.post('/', productController.createProduct);

// READ - Get all products (with optional filters)
// GET /api/products?category=Electronics&inStock=true&minPrice=100&maxPrice=1000
router.get('/', productController.getAllProducts);

// READ - Get a single product by ID
// GET /api/products/:id
router.get('/:id', productController.getProductById);

// UPDATE - Update a product by ID
// PUT /api/products/:id
router.put('/:id', productController.updateProduct);

// DELETE - Delete a product by ID
// DELETE /api/products/:id
router.delete('/:id', productController.deleteProduct);

// ADDITIONAL - Get products by category
// GET /api/products/category/:category
router.get('/category/:category', productController.getProductsByCategory);

module.exports = router;
