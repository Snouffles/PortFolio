
const express = require("express");
const cors = require("cors");


require("dotenv").config();

const route = require("../backend/routes/route.js");
const limiter = require("./middlewares/rateLimiter")

const PORT = process.env.PORT || 3000;

const app = express();


//MIDDLEWARE
app.use(limiter);
app.set("trust proxy", 1);

//ENABLE CORS
app.use(cors());


//SET STATIC FOLDER
app.use(express.static("../frontend/"))

//ROUTES
app.use("/api", route);

//LISTEN
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});