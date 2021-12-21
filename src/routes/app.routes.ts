import { Router } from "express";
import { helloApp } from "../controllers/app.controller";

const router = Router();

router.get("/", helloApp);

export default router;
