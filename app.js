require("dotenv").config();
const authRoutes = require("./src/routes/authRoutes");
const express = require("express");
const app = express();
const productRoutes = require("./src/routes/productRoutes");

const mainRoutes = require("./src/routes/mainRoutes");

// Request Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.json());
app.post("/test", (req, res) => {
    console.log("Body received:", req.body);

    res.json({
        body: req.body
    });
});

app.use("/", mainRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Available endpoints:");
    console.log(`POST http://localhost:${PORT}/api/products`);
    console.log(`GET  http://localhost:${PORT}/api/products`);
    console.log(`GET  http://localhost:${PORT}/api/products/:id`);
    console.log(`PUT  http://localhost:${PORT}/api/products/:id`);
    console.log(`DELETE http://localhost:${PORT}/api/products/:id`);
});