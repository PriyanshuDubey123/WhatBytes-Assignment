import { Router } from "express";
import UserController from "../../controllers/userController";
import { authenticateUser } from "../../middlewares/authMiddleware";

const router = Router();


router.get("/", authenticateUser, UserController.getUsers);
router.get("/:id", authenticateUser, UserController.getUserById);
router.put("/:id", authenticateUser, UserController.updateUser);
router.delete("/:id", authenticateUser, UserController.deleteUser);

export default router;
