const { Router } = require("express");
const { home } = require("../controllers/product.controller");

const router= Router()

router.get("/",home)


module.exports =router