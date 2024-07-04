const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect(
  "mongodb+srv://admin:Guddu%402303@cluster0.rhndtyz.mongodb.net/todo-app"
);

const todoFormat = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoFormat);

module.exports = {
  todo,
};
