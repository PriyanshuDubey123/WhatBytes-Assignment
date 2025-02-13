import { Router } from "express";
import TaskController from "../../controllers/taskController";
import { authenticateUser } from "../../middlewares/authMiddleware";

const router = Router();


router.post("/", authenticateUser, TaskController.createTask);
router.get("/:projectId", authenticateUser, TaskController.getTaskByProjectId);
router.get("/", authenticateUser, TaskController.getTaskByFilters);
router.put("/:id", authenticateUser, TaskController.updateTask);
router.delete("/:id", authenticateUser, TaskController.deleteTask);

export default router;
