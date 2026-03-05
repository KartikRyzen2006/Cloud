const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
    res.json({
        message: "File uploaded successfully",
        file: req.file.filename
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});