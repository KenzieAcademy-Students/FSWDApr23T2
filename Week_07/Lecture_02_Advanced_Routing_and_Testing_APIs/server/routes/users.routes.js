import { Router } from "express";
import users from "../data/users";

/**
 * All Routes start with URL: /api/users
 */
const usersRoutes = Router();

usersRoutes
  .route("/")
  // GET /api/users - returns all users
  .get((req, res) => {
    res.status(200).json(users);
  })
  // POST /api/users - create a single user
  .post((req, res) => {
    /**
     * If you need to get the data submitted in the body of
     * the HTTP request, you can access it through req.body
     */
    const { firstName, lastName, email } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(422).json({
        error: "Please include all fields: firstName, lastName, and email",
      });
    }

    users.push({ firstName, lastName, email });
    res.status(201).json({ message: "Success" });
  });

export default usersRoutes;
