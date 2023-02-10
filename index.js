const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProductsRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");
const PORT = 3000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["lpmkonjibhuvgycftxdrzseawq"],
  })
);
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
  console.log(`access at http://localhost:${PORT}`);
});
