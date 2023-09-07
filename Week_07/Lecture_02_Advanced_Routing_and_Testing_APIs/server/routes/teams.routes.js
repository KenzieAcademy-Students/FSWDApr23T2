import { Router } from "express";
import teams from "../data/teams.json";

/**
 * All Routes start with URL: /api/teams
 */
const teamsRoutes = Router();

/**
 * Let's create a route that will return the basic information about every team.
 */
teamsRoutes
  .route("/")
  // GET /api/teams
  .get((req, res) => {
    const teamsWithoutRosters = teams.map((team) => {
      delete team.roster;
      return team;
    });

    res.status(200).json(teamsWithoutRosters);
  });

/**
 * Let's create a route that will return the basic information about
 * one single team. The single team should be identified by its
 * abbreviation
 */
teamsRoutes
  .route("/:abbrev")
  // GET /api/teams/{some team abbreviation}
  .get((req, res) => {
    const { abbrev } = req.params;

    const singleTeam = teams.find(
      (team) => team.abbreviation === abbrev.toUpperCase()
    );

    if (!singleTeam) {
      res.sendStatus(404);
    } else {
      delete singleTeam.roster;
      res.status(200).json(singleTeam);
    }
  });

export default teamsRoutes;
