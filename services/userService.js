const User = require("../models/User");
const AppError = require("../middleware/AppError");

const createUser = async (userData) => {
  const existingUser = await User.findOne({
    email: userData.email,
  });

  if (existingUser) {
    throw new AppError("Email already exists", 400);
  }

  const user = await User.create(userData);

  return user;
};

const getUserById = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

const getAllUsers = async (query) => {
  const filter = {};

  if (query.name) {
    filter.name = {
      $regex: query.name,
      $options: "i",
    };
  }

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const users = await User.find(filter).skip(skip).limit(limit);

  if (users.length === 0) {
    throw new AppError("No users found", 404);
  }

  return users;
};
const updateUser = async (id, userData) => {
  if (userData.email) {
    const existingUser = await User.findOne({
      email: userData.email,
      _id: { $ne: id },
    });

    if (existingUser) {
      throw new AppError("Email already exists", 400);
    }
  }

  const user = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};
const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
