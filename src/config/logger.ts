import winston from "winston";
import path from "path";

// Define log format
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
  })
);

// Create logger instance
const logger = winston.createLogger({
  level: "info", // Default logging level
  format: logFormat,
  transports: [
    // Log to the console
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), logFormat),
    }),

    // Log to a file (logs/app.log)
    new winston.transports.File({
      filename: path.join(__dirname, "../../logs/app.log"),
      level: "info", // Only logs info and above
    }),

    // Log errors separately (logs/error.log)
    new winston.transports.File({
      filename: path.join(__dirname, "../../logs/error.log"),
      level: "error",
    }),
  ],
});

export default logger;
