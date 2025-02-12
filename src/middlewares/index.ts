import { authenticateUser } from "./authMiddleware";
import { errorHandler } from "./errorMiddleware";

const MiddleWares = {
   authenticateUser,
   errorHandler
}

export default MiddleWares;