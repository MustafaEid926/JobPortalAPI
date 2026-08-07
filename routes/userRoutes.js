const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");

const validate = require("../middleware/validate");

const {
  createUserSchema,
  updateUserSchema,
} = require("../validators/userValidator");
// Create
router.post("/", validate(createUserSchema), userController.createUser);
// Get All
router.get("/", userController.getAllUsers);
// Get By ID
router.get("/:id", userController.getUserById);
// Update
router.put("/:id", validate(updateUserSchema), userController.updateUser);
// Delete
router.delete("/:id", userController.deleteUser);

module.exports = router;
