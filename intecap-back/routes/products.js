const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authenticateJWT = require('../middlewares/authMiddleware');

router.get('/', productController.getProducts);
router.post('/', authenticateJWT, productController.createProduct);
router.put('/:id', authenticateJWT, productController.updateProduct);
router.delete('/:id', authenticateJWT, productController.deleteProduct);

module.exports = router;
