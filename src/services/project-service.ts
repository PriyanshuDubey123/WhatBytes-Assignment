import Repositories from "../repositories";

const projectRepository = new Repositories.ProjectRepository();

const ProjectService = {
  async createProject(data: any) {
    try {
      return await projectRepository.create(data);
    } catch (error) {
      throw error;
    }
  },

  async getAllProjects() {
    try {
      return await projectRepository.findAll();
    } catch (error) {
      throw error;
    }
  },

  async getAllProjectsWithPagination(skip:number,take:number) {
    try {
      return await projectRepository.findAllwithPagination(skip,take);
    } catch (error) {
      throw error;
    }
  },

  async countAllRecords() {
    try {
      return await projectRepository.countRecords();
    } catch (error) {
      throw error;
    }
  },


  async getProjectById(id: string) {
    try {
      return await projectRepository.findOne(id);
    } catch (error) {
      throw error;
    }
  },

  async deleteProjectById(id: string) {
    try {
      return await projectRepository.delete(id);
    } catch (error) {
      throw error;
    }
  },

  async updateProjectById(id: string, data: any) {
    try {
      return await projectRepository.update(id, data);
    } catch (error) {
      throw error;
    }
  },
};

export default ProjectService;
