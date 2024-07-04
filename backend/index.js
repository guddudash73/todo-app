const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const bodyParser = require("body-parser");
const { todo } = require("./db");
const cors = require("cors")
app.use(cors())
app.use(bodyParser.json());


app.post("/todo", async function (req, res) {
  const createPayload = await req.body;
  console.log(createPayload)
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  //put it in mongo db
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(200).json({
    msg: "Todo created successfully",
  });
});

app.get("/todo", async function (req, res) {
  const allTodos = await todo.find({});
  res.status(200).json({
    allTodos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayLoad = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayLoad);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  //update it in mongodb
  const findId = await todo.findOne({ _id: updatePayLoad.id });
  if (!findId) {
    res.status(411).json({
      msg: "Id is incorrect",
    });
    return;
  }
  await todo.updateOne({ _id: updatePayLoad.id }, { completed: true });

  res.status(200).json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
