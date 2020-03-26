const router = require("express").Router();
const db = require("../models")

router.post("/savebook", (req, res) => {
    console.log(req.body)
})

// router.route("/")
//   .get(bookController.findAll)
//   .post(bookController.create);
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports=router