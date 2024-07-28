//import models
const {User} = require('../models/')

module.exports = {
  // create functions for getting all Users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //getting Single User
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({
        _id: req.params.userId,
      }).populate('friends').populate('thoughts');

      if (!user) {
        return res.status(404).json({
          message: "No user with that ID",
        });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //adding User
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //updating user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: "No user with this id!" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //deleting user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!user) {
        res.status(404).json({ message: "No user with that ID" });
      }

      res.json({ message: "User deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //adding friend
  async addFriend(req, res) {
    console.log("You are adding a friend");
    

     try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }, 
  //deleting friend
  async removeFriend (req, res) {
    console.log("You are removing a friend");
    

     try {
      const user = await User.findOneAndUpdate
        ({ _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

};
