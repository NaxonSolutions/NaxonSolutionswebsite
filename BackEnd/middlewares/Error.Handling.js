const errorHandler = (err, req, res, next) => {
  // Log the error for server-side debugging
  console.error(`Error: ${err.message}`);
  console.error(`Stack: ${err.stack}`);

  // Set locals, only providing error in development
  const isDevelopment = process.env.NODE_ENV === "development";

  // Determine status code (use err.status if exists, otherwise 500)
  const statusCode = err.status || 500;

  // Send the response
  res.status(statusCode).json({
    status: "error",
    message: isDevelopment ? err.message : "Internal Server Error",
    stack: isDevelopment ? err.stack : undefined,
    // You can add more custom fields here if needed
  });
};

// Example usage in your Express app:
// app.use(errorHandler);

module.exports = errorHandler;
