// MVC model-view-controller
const express = require("express");
const productController = require("../controller/product");
const productRouter = express.Router();
productRouter
  .post("/", productController.createProduct)
  .get("/", productController.readProduct)
  .get("/:id", productController.readProductId)
  .put("/:id", productController.updateProduct)
  .patch("/:id", productController.patchProduct)
  .delete("/:id", productController.deleteProduct);

exports.productRouter = productRouter;
