// middleware/error-handler.js
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  // Log full error for debugging
  console.error(err);

  // Use custom error statusCode if available, otherwise 500
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  // Use the error message if available, otherwise generic message
  const message = err.message || 'Something went wrong, try again later';

  // Send JSON response
  res.status(statusCode).json({ msg: message });
};

export default errorHandlerMiddleware;
