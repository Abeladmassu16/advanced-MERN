import express from "express";
import {
  getJobs,      
  createJob,
  updateSingleJob,
  getSingleJob,
  deleteJob,
  showStats,
} from "../controller/jobController.js"; 
import { validateJobInput,validateIdParam } from "../middleware/validationMiddleware.js";
import { cheekForTestUser } from "../middleware/authMiddleware.js";


const router = express.Router();

router.route("/")
  .get(getJobs)
  .post(cheekForTestUser, validateJobInput, createJob);

  router.route('/stats').get(showStats)

router.route("/:id")
  .get(validateIdParam, getSingleJob)
  .patch(cheekForTestUser,validateJobInput, validateIdParam,updateSingleJob)
  .delete(cheekForTestUser, validateIdParam,deleteJob);

export default router;
