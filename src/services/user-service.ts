import Repositories from "../repositories";

const userRepository = new Repositories.UserRepository();

const UserService = {
  async createUser(data: any) {
    try {
      return await userRepository.create(data);
    } catch (error) {
      throw error;
    }
  },

  async getAllUsers() {
    try {
      return await userRepository.findAll();
    } catch (error) {
      throw error;
    }
  },

  async getAllUsersWithPagination(skip:number,take:number) {
    try {
      return await userRepository.findAllwithPagination(skip,take);
    } catch (error) {
      throw error;
    }
  },

  async countAllRecords() {
    try {
      return await userRepository.countRecords();
    } catch (error) {
      throw error;
    }
  },

  async getUserByEmail(email: string) {
    try {
      return await userRepository.findByEmail(email);
    } catch (error) {
      throw error;
    }
  },

  async getUserById(id: string) {
    try {
      return await userRepository.findOne(id);
    } catch (error) {
      throw error;
    }
  },

  async deleteUserById(id: string) {
    try {
      return await userRepository.delete(id);
    } catch (error) {
      throw error;
    }
  },

  async updateUserById(id: string, data: any) {
    try {
      return await userRepository.update(id, data);
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
