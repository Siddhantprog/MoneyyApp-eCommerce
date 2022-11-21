const express = require('express');
const router = express.Router();

const Product = require('../controllers/productController');
const Auth = require('../middleware/auth');

router.route('/product/:id').get(Product.getProductDetails);

router.route('/products').get(Product.getAllProducts);

router.route('/review').put(Auth.isAuthenticatedUser, Product.createReview);
router
  .route('/reviews')
  .get(Product.getProductReview)
  .delete(Auth.isAuthenticatedUser, Product.deleteReview);

// export
module.exports = router;
