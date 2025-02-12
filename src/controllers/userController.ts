import { Request, Response } from "express";
import Services from "../services";

const UserController = {
  async getUsers(_req: Request, res: Response) {
    try {
      const users = await Services.UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  },

  async getUserswithPagination(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;
      const users = await Services.UserService.getAllUsersWithPagination(
        skip,
        limit
      );
      const totalUsers = await Services.UserService.countAllRecords();
      const totalPages = Math.ceil(totalUsers / limit);
      res.status(200).json({
        success: true,
        data: users,
        pagination: {
          totalUsers,
          totalPages,
          currentPage: page,
          pageSize: limit,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching projects", error });
    }
  },

  async getUserById(req: Request, res: Response) {
    try {
      const user = await Services.UserService.getUserById(req.params.id);
      user
        ? res.json(user)
        : res.status(404).json({ message: "User not found" });
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error });
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const { name, email } = req.body;
      const user = await Services.UserService.updateUserById(req.params.id, {
        name,
        email,
      });

      res.json({ message: "User updated successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      await Services.UserService.deleteUserById(req.params.id);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  },
};

export default UserController;
