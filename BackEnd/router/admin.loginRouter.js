const express = require("express");
const admin_router = express.Router();

const { loginAdmin } = require("../controller/adminLogin.controller");
admin_router.post("/admin", loginAdmin);
module.exports = admin_router;
