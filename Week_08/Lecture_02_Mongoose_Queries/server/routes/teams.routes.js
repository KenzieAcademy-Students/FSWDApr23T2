import { Router } from "express";
import Team from "../models/team.model";

const teamsRoutes = Router();

/**
 * This router handles requests with a URL starting with:
 * /api/teams
 */

teamsRoutes
  .route("/")
  // GET /api/teams - get and return a list of all teams
  .get(async (req, res) => {
    /**
     * The .find() method will find and return multiple
     * documents. If the method is called with empty parameters,
     * it will return all documents in the called upon model's
     * collection
     */
    try {
      const allTeams = await Team.find();

      res.json(allTeams);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  // POST /api/teams - create a new team and return it
  .post(async (req, res) => {
    /**
     * Step 1: Destructure the necessary values
     * out of req.body
     */
    const {
      teamName,
      location,
      abbreviation,
      superBowlAppearances,
      isActive,
      yearEstablished,
    } = req.body;

    /**
     * Step 2: Use those values to create
     * a new thing
     */
    try {
      const newTeam = await Team.create({
        teamName,
        location,
        abbreviation,
        superBowlAppearances,
        isActive,
        yearEstablished,
      });

      /**
       * Step 3: Respond with the newly created
       * document.
       */
      res.status(201).json(newTeam);
    } catch (err) {
      /**
       * This is SUPER extra. If you are confused, don't sweat it!
       * Simply return a response with a status code of 400 and
       * send the error as json
       */
      if (err.name === "ValidationError") {
        const errors = {};

        for (let key of Object.keys(err.errors)) {
          errors[key] = err.errors[key].message;
        }

        res.status(422).json(errors);
      } else {
        res.status(400).json(err);
      }
    }
  });

teamsRoutes
  .route("/:teamId")
  // GET /api/teams/:teamId - get and return a single team by its id
  .get(async (req, res) => {
    /**
     * Step 1: Pull the unique ID from the route parameters
     */
    const { teamId } = req.params;
    try {
      /**
       * Option 1: Use the .findOne() method
       */
      // const singleTeam = await Team.findOne({ _id: teamId })

      /**
       * Option 2: Use the .findById() method
       */
      const singleTeam = await Team.findById(teamId);

      if (singleTeam === null) {
        return res.sendStatus(404);
      }

      res.json(singleTeam);
    } catch (error) {
      res.sendStatus(500);
    }
  })
  // PUT /api/teams/:teamId - update and return a single team
  .put(async (req, res) => {
    /**
     * When updating a single document, you'll almost always need
     * to pull:
     * - the parameter (in this case teamId) from req.params
     * - the fields in req.body
     */
    const { teamId } = req.params;
    const {
      teamName,
      location,
      abbreviation,
      superBowlAppearances,
      isActive,
      yearEstablished,
    } = req.body;

    try {
      /**
       * Using findOneAndUpdate:
       */
      // const updatedTeam = await Team.findOneAndUpdate(
      //   { _id: teamId },
      const updatedTeam = await Team.findByIdAndUpdate(
        teamId,
        {
          teamName,
          location,
          abbreviation,
          superBowlAppearances,
          isActive,
          yearEstablished,
        },
        { new: true, runValidators: true }
      );

      if (updatedTeam === null) {
        return res.sendStatus(404);
      }

      res.json(updatedTeam);
    } catch (error) {
      if (error.name === "ValidationError") {
        const errors = {};

        for (let key of Object.keys(error.errors)) {
          errors[key] = error.errors[key].message;
        }

        res.status(422).json(errors);
      } else {
        res.status(400).json(error);
      }
    }
  })
  // DELETE /api/teams/:teamId - delete a single team by its id
  .delete(async (req, res) => {
    const { teamId } = req.params;

    try {
      /**
       * Using findOneAndDelete():
       */
      const deletedTeam = await Team.findOneAndDelete({ _id: teamId });
      // const deletedTeam = await Team.findByIdAndDelete(teamId);

      if (deletedTeam === null) {
        return res.sendStatus(404);
      }

      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  });

export default teamsRoutes;
