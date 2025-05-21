import { Router } from "express";
import { getTitle, searchByCity } from "../controller/weatherController.js";

const router = Router();

router.get("/", getTitle);
router.get("/:input", searchByCity);

export default router;
