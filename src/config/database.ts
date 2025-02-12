import { PrismaClient } from "@prisma/client";
import logger from "./logger";  // Assuming you have a logger setup in config/logger.ts

const prisma = new PrismaClient();

const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    logger.info("✅ Connected to Database");
  } catch (error) {
    logger.error("❌ Error connecting to the database: " + error);
    process.exit(1);
  }
};

export { prisma, connectToDatabase };
