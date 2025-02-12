import { prisma } from "../config/database";
import logger from "../config/logger";
import CrudRepository from "./crud-repository";

class TaskRepository extends CrudRepository<typeof prisma.task> {
    constructor() {
        super(prisma.task);
    }

    async getTaskByProjectId(projectId: string) {
        try {
            return await this.model.findMany({ where: { projectId } });
        } catch (error) {
            logger.error("Error fetching task by projectID:", error);
            throw new Error("Failed to retrieve task by projectID");
        }
    }

    async getTasksWithFilters(filters: any) {
        try {
          return await this.model.findMany({
            where: filters
          });
        } catch (error) {
          throw new Error("Error fetching tasks with filters");
        }
      }
}

export default TaskRepository;
