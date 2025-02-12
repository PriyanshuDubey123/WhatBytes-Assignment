import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

class CrudRepository<
  T extends {
    create: Function;
    findMany: Function;
    findUnique: Function;
    update: Function;
    delete: Function;
    count: Function;
  }
> {
  protected model: T;

  constructor(model: T) {
    this.model = model;
  }

  // Create a new record
  async create(data: any): Promise<any> {
    try {
      return await this.model.create({data});
    } catch (error) {
      console.error("Error creating record:", error);
      throw new Error("Failed to create record");
    }
  }

  // Get all records
  async findAll(): Promise<any[]> {
    try {
      return await this.model.findMany();
    } catch (error) {
      console.error("Error fetching records:", error);
      throw new Error("Failed to retrieve records");
    }
  }

  // Get all records with Pagination
  async findAllwithPagination(skip:number,take:number): Promise<any[]> {
    try {
      return await this.model.findMany({skip,take});
    } catch (error) {
      console.error("Error fetching records:", error);
      throw new Error("Failed to retrieve records");
    }
  }

  // Count total Records or Entries in model

  async countRecords(): Promise<any> {
    try {
      return await this.model.count();
    } catch (error) {
      throw new Error("Error counting users");
    }
  }

  // Get one record by ID
  async findOne(id: string): Promise<any | null> {
    try {
      return await this.model.findUnique({ where: { id } });
    } catch (error) {
      console.error("Error fetching record:", error);
      throw new Error("Failed to retrieve record");
    }
  }

  // Update a record by ID
  async update(id: string, data: any): Promise<any> {
    try {
      return await this.model.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.error("Error updating record:", error);
      if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
        throw new Error("Record not found for update");
      }
      throw new Error("Failed to update record");
    }
  }

  // Delete a record by ID
  async delete(id: string): Promise<any> {
    try {
      return await this.model.delete({ where: { id } });
    } catch (error) {
      console.error("Error deleting record:", error);
      if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
        throw new Error("Record not found for deletion");
      }
      throw new Error("Failed to delete record");
    }
  }
}

export default CrudRepository;
