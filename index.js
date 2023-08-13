const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
// Define a simple route

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, API!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
