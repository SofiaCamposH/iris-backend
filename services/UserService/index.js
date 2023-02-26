const UserModel = require("../../models/User");

exports.getAllUsers = async () => {
  return UserModel.find();
};

exports.createUser = async (reading) => {
  return UserModel.create(reading);
};

exports.getUserById = async (id) => {
  return UserModel.findById(id);
};

exports.updateUser = async (id, user) => {
  return UserModel.findByIdAndUpdate(id, user);
};

exports.deleteUser = async (id) => {
  return UserModel.findByIdAndDelete(id);
};
