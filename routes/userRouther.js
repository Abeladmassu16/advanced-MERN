import { Route, Router } from "express";
import { getApplicationStatus, getCurrentUSer, updateUser } from "../controller/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions,cheekForTestUser } from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";


const router= Router();

router.get('/current-user',getCurrentUSer);
router.get('/admin/app-stats',[authorizePermissions('admin'), getApplicationStatus]);
router.patch(
  "/update-user",
  cheekForTestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);



export default router;