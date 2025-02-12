import { Request, Response } from "express";
import Services from "../services";

const ProjectController = {
  async createProject(req: Request, res: Response) {
    try {
      const { name, description, status, userId } = req.body;
      const project = await Services.ProjectService.createProject({
        name,
        description,
        status,
        userId,
      });

      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ message: "Error creating project", error });
    }
  },

  async getProjects(_req: Request, res: Response) {
    try {
      const projects = await Services.ProjectService.getAllProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Error fetching projects", error });
    }
  },

  async getProjectswithPagination(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;
      const projects =
        await Services.ProjectService.getAllProjectsWithPagination(skip, limit);
      const totalProjects = await Services.ProjectService.countAllRecords();
      const totalPages = Math.ceil(totalProjects / limit);
      res.status(200).json({
        success: true,
        data: projects,
        pagination: {
          totalProjects,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching projects", error });
    }
  },

  async updateProject(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const project = await Services.ProjectService.updateProjectById(id, data);

      res.json({ message: "Project updated successfully", project });
    } catch (error) {
      res.status(500).json({ message: "Error updating project", error });
    }
  },

  async deleteProject(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await Services.ProjectService.deleteProjectById(id);
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting project", error });
    }
  },
};

export default ProjectController;
