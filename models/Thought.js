const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
//help to understand imports and exports

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 180,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate
    },
    username: {
      type: String,
      required: true,
    },
    //Array of nested documents created with the reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: { getters: true },
    id: false,
  }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;

