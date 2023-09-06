import express from "express";
import cors from "cors";
import router from "./routes/index.practical";

const app = express();

/**
 * Our express app has a built-in method called .use()
 * Simply put, it allows us to define what things this
 * express application can actually use
 */

/**
 * By using the cors() middleware, we can instruct our express
 * application to accept requests coming from other origins (i.e.
 * domains other than http://localhost:8080)
 */
app.use(cors());

/**
 * To use a router, we must pass 2 arguments:
 * - The URL fragment all URL's should start with. A good
 *    practice when creating API's with express to make this
 *    URL fragment "/api"
 * - The express Router that all requests with the given
 *    starting URL fragment should be forwarded to.
 */
app.use("/api", router);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(8080, () => console.log("[Server] Now listening on port 8080"));

/**
 * When my server receives an HTTP request, the raw request will be turned
 * into a request object. Regardless of URL, request method, etc., this request
 * will be passed through every single middleware function declared through
 * app.use()
 */
