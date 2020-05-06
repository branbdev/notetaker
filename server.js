const express = require("express");
const apiRoutes = require("./develop/routing/apiRoutes");
const htmlRoutes = require("./develop/routing/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3030;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("./develop/public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
