const express = require("express");
const router =  express.Router();

const { getProductById} = require("../controllers/product");
const { isSignedIn,isAdmin,isAuthenticated} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
const { route } = require("./auth");

//Params
router.param("userId", getUserById);
router.param("productId", getProductById);



//All of actual routes



module.exports = router;
