import { Router } from "express";
import ProjectController from "../../controllers/projectController";
import { authenticateUser } from "../../middlewares/authMiddleware";

const router = Router();

router.post("/", authenticateUser, ProjectController.createProject);
router.get("/", authenticateUser, ProjectController.getProjects);
router.put("/:id", authenticateUser, ProjectController.updateProject);
router.delete("/:id", authenticateUser, ProjectController.deleteProject);

export default router;
