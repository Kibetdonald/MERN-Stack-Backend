const express = require("express");
const router = express.Router();
const {
  createTodo,
  getTodo,
  deleteTodoById
} = require("../controller/todo");

// Post request
router.post(
  "/todo/create",
  createTodo
);

// Get request
router.get(
  "/todos",
  getTodo
 
);


// Delete request
router.delete(
  "/todo/deleteTodoById/:productId",
  deleteTodoById
);
// Update Request
router.get("update/id", (req, res)=>{
  res.send("Update request")
})

// exporting the router
module.exports = router;
