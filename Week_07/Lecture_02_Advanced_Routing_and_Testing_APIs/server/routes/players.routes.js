import { Router } from "express";
import getAllPlayers from "../getAllPlayers";

/**
 * All Route URL's start with: /api/players
 */
const playersRoutes = Router();

playersRoutes
  .route("/")
  // GET /api/players
  .get((req, res) => {
    const allPlayers = getAllPlayers();
    res.status(200).json(allPlayers);
  });

playersRoutes
  .route("/:playerId")
  // GET /api/players/{player id}
  .get((req, res) => {
    /**
     * To access a route parameter, you should destructure it
     * out of req.params
     */
    const { playerId } = req.params;

    const allPlayers = getAllPlayers();
    const singlePlayer = allPlayers.find((player) => player.id === playerId);

    if (!singlePlayer) {
      res.sendStatus(404);
    } else {
      res.status(200).json(singlePlayer);
    }
  });

export default playersRoutes;
