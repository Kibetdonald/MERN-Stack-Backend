const Todo = require("../model/todoModel");

exports.createProduct = (req, res) => {
  const { who, slug, task, isDone, created_at, updatedAt } = req.body;

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
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
      res.status(201).json({ todo});
    }
  });
};
