const express = require("express")
const { getAllproducts, createProduct, updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview, getAdminProducts } = require("../Controllers/ProductController")
const { isAuthenticatedUser, authorizeRoles } = require("../Middleware/Auth")

const router = express.Router()

router.route("/products").get(getAllproducts)
router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct)
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route("/admin/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct).get(getProductDetails)
router.route("/product/:id").get(getProductDetails)
router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview)



module.exports = router 