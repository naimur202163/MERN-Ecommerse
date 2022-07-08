const express = require("express");
const  {registerUser,loginUser}  = require("../controllers/userController");
const router = express.Router();



router.route("/registar").post(registerUser);
// router.post('/registar',registerUser)
router.route("/login").post(loginUser)

module.exports = router;