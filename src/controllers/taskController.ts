import { Request, Response } from "express";
import Services from "../services";


const TaskController = {

  async createTask(req: Request, res: Response){
  try {
    const { title, description, status, projectId, assignedUserId } = req.body;
    const task = await Services.TaskService.createTask({ title, description, status, projectId, assignedUserId});

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
},

async getTaskByProjectId(req: Request, res: Response){
 try {
   const tasks = await Services.TaskService.getTaskByProjectId(req.params.projectId);
   res.json(tasks);
 } catch (error) {
  res.status(500).json({ message: "Error fetching tasks", error });
 }
},

async getTaskByFilters(req: Request, res: Response){
 try {

  const { projectId, status, assignedUserId } = req.query;

  const filters:any = {};

  if(projectId)filters.projectId = projectId;
  if(status)filters.status = status;
  if(assignedUserId)filters.assignedUserId = assignedUserId;

   const tasks = await Services.TaskService.getTasksByFilters(filters);
   res.json(tasks);
 } catch (error) {
  res.status(500).json({ message: "Error fetching tasks", error });
 }
},

async updateTask(req: Request, res: Response){
  try {
    const task = await Services.TaskService.updateTaskById(req.params.id,req.body,);

    res.json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
},

async deleteTask(req: Request, res: Response){
 try {
   await Services.TaskService.deleteTaskById(req.params.id);
   res.json({ message: "Task deleted successfully" });
 } catch (error) {
  res.status(500).json({ message: "Error deleting task", error });
 }
}
}

export default TaskController;