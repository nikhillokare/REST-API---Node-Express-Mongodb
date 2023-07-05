const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product");
const app = express();
const port = 7575;
app.use("/products", router.productRouter);
// Body Parser
app.use(express.json());
// Middle ware
app.use((req, res, next) => {
  console.log(req.method, req.ip, req.hostname, new Date());
  next();
});
// Connect to Mongoose DB
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("DB Connected To Mongodb");
}

app.listen(port, () => {
  console.log(`server is running fine on ${port}`);
});
