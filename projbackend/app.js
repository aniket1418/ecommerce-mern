//imp declaration of .env file
require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
//my routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");

mongoose
    .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
}).then(() =>{
    console.log("DB CONNECTED");
}).catch(() => {
    console.log("Data bases crashes");
});


//This is my middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//my routes
app.use("/api", authRoute);
app.use("/api",userRoute);
app.use("/api",categoryRoute);
app.use("/api",productRoute);



//PORT
const port = process.env.PORT || 8000;


//Starting a Server
app.listen(port,() => {
    console.log(`App is running ${port}`);
})