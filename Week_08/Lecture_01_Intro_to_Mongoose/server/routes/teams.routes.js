import { Router } from "express";

const teamsRoutes = Router();

/**
 * This router handles requests with a URL starting with:
 * /api/teams
 */

teamsRoutes
  .route("/")
  // GET /api/teams - get and return a list of all teams
  .get((req, res) => {})
  // POST /api/teams - create a new team and return it
  .post((req, res) => {});

teamsRoutes
  .route("/:teamId")
  // GET /api/teams/:teamId - get and return a single team
  .get((req, res) => {})
  // PUT /api/teams/:teamId - update and return a single team
  .put((req, res) => {})
  // DELETE /api/teams/:teamId - delete a single team by its id
  .delete((req, res) => {});

export default teamsRoutes;
