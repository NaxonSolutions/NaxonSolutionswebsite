const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const errorHandler = require("./middlewares/Error.Handling.js");
const connectDb = require("./config/dbCONNECTIVITY.js");
const admin_router = require("./router/admin.loginRouter.js");
const message_Router = require("./router/messages.Router.js");

const serverAPP = express();

// Enable CORS with specific options
serverAPP.use(
  cors({
    origin: "http://localhost:5173", // Change this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse JSON request bodies
serverAPP.use(express.json());

// Connect to Database
connectDb();

// Define Routes
serverAPP.use("/", admin_router);
serverAPP.use("/", message_Router);

// Error Handling Middleware
serverAPP.use(errorHandler);

// Start Server
serverAPP.listen(process.env.PORT, () => {
  console.log("Server Started at PORT", process.env.PORT);
});
