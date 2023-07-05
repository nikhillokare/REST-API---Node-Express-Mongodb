const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

exports.createProduct = async (req, res) => {
  const product = new Product();
  try {
    const savedProduct = await product.save();
    console.log(savedProduct); // Log the saved product object

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("An error occurred while saving the product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};

exports.readProduct = (req, res) => {
  res.send(products);
};

exports.readProductId = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.send("Product is not available");
  }
  res.status(200).send(product);
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
};

exports.patchProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json(req.body);
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  products.splice(product, 1);
  res.status(202).json(product);
};
