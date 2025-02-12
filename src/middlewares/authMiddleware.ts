import { Request, Response, NextFunction } from "express";

import logger from "../config/logger";
import JWTUtils from "../utils/jwtUtils";

// Extend the Request interface to include user data
export interface AuthRequest extends Request {
  user?: { userId: string }; // Add user property to request
}

// Middleware for checking authentication (JWT token verification)
export const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1];  // Extract token from Authorization header
  logger.info(req.header("Authorization"))
  if (!token) {
    // No token provided, return response with 401 status code
    res.status(401).json({ message: "Access denied. No token provided." });
    return; // Don't continue to next middleware if no token is provided
  }

  try {
    // Verify the token using JWT secret
    
    const decoded = JWTUtils.verifyToken(token) as { userId: string };

    // Attach decoded user information to request object
    req.user = { userId: decoded.userId };

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    // If token verification fails, return response with 400 status code
    res.status(400).json({ message: "Invalid token" });
    return; // Don't continue further if the token is invalid
  }
};
