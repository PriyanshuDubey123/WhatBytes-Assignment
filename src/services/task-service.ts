import Repositories from "../repositories";

const taskRepository = new Repositories.TaskRepository();

const TaskService = {
  async createTask(data: any) {
    try {
      return await taskRepository.create(data);
    } catch (error) {
      throw error;
    }
  },

  async getAllTasks() {
    try {
      return await taskRepository.findAll();
    } catch (error) {
      throw error;
    }
  },

  async getAllTasksWithPagination(skip:number,take:number) {
    try {
      return await taskRepository.findAllwithPagination(skip,take);
    } catch (error) {
      throw error;
    }
  },

  async countAllRecords() {
    try {
      return await taskRepository.countRecords();
    } catch (error) {
      throw error;
    }
  },

  async getTaskById(id: string) {
    try {
      return await taskRepository.findOne(id);
    } catch (error) {
      throw error;
    }
  },


  async getTaskByProjectId(projectId: string) {
    try {
      return await taskRepository.getTaskByProjectId(projectId);
    } catch (error) {
      throw error;
    }
  },

  async getTasksByFilters(filters: any) {
    try {
      return await taskRepository.getTasksWithFilters(filters);
    } catch (error) {
      throw error;
    }
  },


  async deleteTaskById(id: string) {
    try {
      return await taskRepository.delete(id);
    } catch (error) {
      throw error;
    }
  },

  async updateTaskById(id: string, data: any) {
    try {
      return await taskRepository.update(id, data);
    } catch (error) {
      throw error;
    }
  },
};

export default TaskService;
