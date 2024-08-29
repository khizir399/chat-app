import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
} from "../controllers/auth.controllers.js";

const router = express.Router();
// sign-up route
router.post("/signup", signupUser);
// login route
router.post("/login", loginUser);
// logout route
router.post("/logout", logoutUser);

export default router;
