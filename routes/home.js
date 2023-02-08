const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("router loaded");

router.get("/", homeController.home);
router.get("/homeview", homeController.home);
router.get("/about", homeController.about);
router.get("/contact", homeController.contact);
router.get("/products", homeController.products);
router.get("/services", homeController.services);

module.exports = router;
