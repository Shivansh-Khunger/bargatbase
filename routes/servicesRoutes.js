import * as servicesController from "../services/servicesControllers.js";

import express from "express";
const router = express.Router();

router.get("/renewAccess", servicesController.refreshAccessToken);
router.get("/userExists", servicesController.ifUserExists);

export default router;
