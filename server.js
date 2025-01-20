const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware để parse JSON

// Cấu hình kết nối MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "thegioididong"
});

db.connect((err) => {
    if (err) {
        console.error("Lỗi kết nối MySQL: ", err);
        return;
    }
    console.log("Kết nối MySQL thành công!");
});

// API lấy danh sách dữ liệu từ MySQL
app.get("/product", (req, res) => {
    const sql = "SELECT * FROM tb_product";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// API lấy danh sách dữ liệu từ MySQL
app.get("/cart", (req, res) => {
    const sql = "SELECT * FROM tb_cart INNER JOIN tb_product ON tb_cart.id_product = tb_product.id;";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

// API thêm dữ liệu vào MySQL
app.post("/users", (req, res) => {
    const { name, email } = req.body;
    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Thêm thành công!", userId: result.insertId });
    });
});

// Chạy server
app.listen(5000, () => {
    console.log("Server đang chạy tại http://localhost:5000");
});
