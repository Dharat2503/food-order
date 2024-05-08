import MyUserController from "../controller/MyUserController";
import express from "express"

const router = express.Router();

// api/my/user/
router.post("/", MyUserController.createCurrentUser)


export default router;