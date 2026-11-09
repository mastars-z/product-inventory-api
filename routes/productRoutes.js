const express = require("express")
const productController = require("../controllers/productController")
const router = express.Router()

router.get("/", productController.getAllProducts)
router.get("/search", productController.searchProducts)
router.get("/category/:category", productController.getProductsByCategory)
router.get("/price/:maxPrice", productController.getProductsByMaxPrice)
router.get("/low-stock", productController.getLowStockProducts)
router.get("/value", productController.getTotalInventoryValue)
router.get("/:id", productController.getProductById)
router.post("/", productController.createProduct)
router.put("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)

module.exports = router