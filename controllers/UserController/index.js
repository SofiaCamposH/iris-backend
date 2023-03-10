const userService = require("../../services/UserService");

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await userService.getAllUsers();
    res.json({ data: Users, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const User = await userService.createUser(req.body);
    res.json({ data: User, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const User = await userService.getUserById(
      req.params.id
    );
    res.json({ data: User, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const User = await userService.updateUser(
      req.params.id,
      req.body
    );
    res.json({ data: User, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const User = await userService.deleteUser(
      req.params.id
    );
    res.json({ data: User, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
