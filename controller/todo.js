// Get the todo model
const Todo = require("../model/todoModel");

// Create Products
exports.createTodo = (req, res) => {
  const { who, slug, task, isDone, created_at, updatedAt } = req.body;

  const todo = new Todo({
    who: req.body.who,
    slug: req.body.slug,
    task: req.body.task,
    isDone: req.body.isDone,
    created_at: req.body.created_at,
    updatedAt: req.body.updatedAt,
  });

  todo.save((error, todo) => {
    if (error) return res.status(400).json({ error });
    if (todo) {
      res.status(201).json({ todo });
    }
  });
};

// Get products from the database
exports.getTodo = async (req, res) => {
  const todo = await Todo.find()
    .select("_id who slug task isDone created_at")
    // .populate({ path: "category", select: "_id name" })
    .exec();

  res.status(200).json({ todo });
};

// Delete todo item by id
exports.deleteTodoById = (req, res) => {
  const { todoId } = req.body.payload;
  if (todoId) {
    Todo.deleteOne({ _id: todoId }).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      } 
    });
  } else {
    res.status(400).json({ error: "Params required" });
  }
};



