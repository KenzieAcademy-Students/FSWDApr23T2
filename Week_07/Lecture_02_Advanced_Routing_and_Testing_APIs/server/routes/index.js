import { Router } from "express";
import coachesRoutes from "./coaches.routes";
import playersRoutes from "./players.routes";
import teamsRoutes from "./teams.routes";
import usersRoutes from "./users.routes";

const router = Router();
/**
 * All Routes start with URL: /api
 */
router.use("/coaches", coachesRoutes);
router.use("/players", playersRoutes);
router.use("/teams", teamsRoutes);
router.use("/users", usersRoutes);

export default router;
