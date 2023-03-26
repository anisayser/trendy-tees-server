const express = require("express");
const routes = express.Router();
const multer = require("multer");
const path = require("path");



//UPLOAD FOLDER
const UPLOADS_FOLDER = "./images/";

//Storage SEtup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER)
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") + "-" + Date.now();
        cb(null, fileName + fileExt)
    }
})

//Preapre the final multer upload object
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2000000, //2mb
    },
    fileFilter: (req, file, cb) => {
        // console.log(file);
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true)
        } else {
            cb(new Error("Only jpg, png & jpeg file supported."))
        }
    }
})


//Controllers
const productsControllers = require("../../../controllers/api/v1/products.controllers");

//HTTP METHODS
routes.route("/search").get(productsControllers.getProductsBySearch);

routes.route("/")
    .get(productsControllers.getAllProducts)
    .post(upload.single("image"), productsControllers.addProduct)

routes.route("/:id").get(productsControllers.getProductById)
    .patch(productsControllers.updateProductById)
    .delete(productsControllers.deleteProductById)

module.exports = routes;