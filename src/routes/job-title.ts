import { Router } from "express";
const router: Router = Router();
import * as jobTitle from "../controllers/job-title";

router.post("/add", jobTitle.addJobTitle);

export { router };
