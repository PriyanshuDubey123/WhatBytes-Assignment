import { prisma } from "../config/database";
import logger from "../config/logger";
import CrudRepository from "./crud-repository";

class UserRepository extends CrudRepository<typeof prisma.user> {
  constructor() {
    super(prisma.user);
  }

  async findByEmail(email: string) {
    try {
      return await this.model.findUnique({ where: { email } });
    } catch (error) {
      logger.error("Error fetching user by email:", error);
      throw new Error("Failed to retrieve user by email");
    }
  }
}

export default UserRepository;
