import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ENV } from "./config/env";
import logger from "./config/logger";
import { errorHandler } from "./middlewares/errorMiddleware";
import apiRoutes from "./routes";
import { connectToDatabase } from "./config/database";


const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api", apiRoutes);


// Error Handling Middleware
app.use(errorHandler);

// Start Server
const startServer = async () => {
  try {
   
    await connectToDatabase();

    app.listen(ENV.PORT, () => {
      logger.info(`🚀 Server running on http://localhost:${ENV.PORT}`);
    });
  } catch (error) {
    logger.error("❌ Error connecting to the database: " + error);
    process.exit(1);
  }
};

startServer();
