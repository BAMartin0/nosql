const { Schema, model } = require("mongoose");
const thoughtSchema = require('./Thought'); 
//help to understand imports and exports


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match: Must match a valid email address (look into Mongoose's matching validation)
    match: [/^[^s@]+@[^s@]+.[^s@]+$/, 'Please enter valid email address'],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});


//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

//Initialize Models

const User = model('user', userSchema); 


//Exports

module.exports = User;



