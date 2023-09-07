import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

/**
 * Initialize middleware
 */
app.use(cors());
// express.json() allows our express app to parse JSON out of the request body
app.use(express.json());

/**
 * Initialize API router
 */
app.use("/api", router);

/**
 * Run server
 */
app.listen(8080, () =>
  console.log("[Server] Now listening on http://localhost:8080")
);
