//import models 
const {Thought} = require('../models')

module.exports = {
    //get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find().populate('user');
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err)
        }
    },
  // create functions for getting all thought, getting Single Thought, adding Thought, updating Thought, deleting Thought, adding reaction, deleteing reaction
};

