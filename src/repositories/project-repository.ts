import { prisma } from "../config/database";
import CrudRepository from "./crud-repository";

class ProjectRepository extends CrudRepository<typeof prisma.project> {
    constructor() {
        super(prisma.project);
    }
}

export default ProjectRepository;
