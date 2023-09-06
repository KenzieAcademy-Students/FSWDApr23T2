import { Router } from "express";

// URL: /api
const router = Router();

router
  .route("/")
  // GET /api
  .get((req, res) => res.send("Ok"))
  // POST /api
  .post((req, res) => res.send("POST Ok"));

router
  .route("/test")
  .get((req, res) => res.sendStatus(200))
  .post((req, res) => res.json({ message: "Hello" }));

router
  .route("/banana")
  .get((res, req) => res.status(201).send("Potatoes"))
  .delete((req, res) => res.status(422).json({ error: "Oh noes" }));

export default router;
