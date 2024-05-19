const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../openapi.json");
require("dotenv").config();

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
