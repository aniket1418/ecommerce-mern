const { request, Router } = require("express");

const express = require("express");
const router =  express.Router();

const {getCategoryById,createCategory,getCategory,getAllCategory,updateCategory, removeCategory} = require("../controllers/category");
const {isAdmin, isAuthenticated, isSignedIn} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
const { route } = require("./auth");


//Params 
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//Actual Routes
//CREAT ROUTE
router.post("/category/create/:userid",
isSignedIn, 
isAuthenticated, 
isAdmin, 
createCategory
);  

//READ ROUTE
router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategory)

//UPDATE ROUTE
router.put("/category/:categoryId/:userId",
isSignedIn,
isAuthenticated,
isAdmin,
updateCategory
);


//DELETE ROUTE
router.delete("/category/:categoryId/:userId",
isSignedIn,
isAuthenticated,
isAdmin,
removeCategory
);

module.exports = router;