const router = require("express").Router();
const db = require("../models")

router.post("/savebook", (req, res) => {
    console.log(req.body)
    // db.Book.save(req.body)
    db.Book.create(req.body)
        .then(function (dbBook) {
            // View the added result in the console
            console.log(dbBook);
            res.json(dbBook)
        })
        .catch(function (err) {
            // If an error occurred, log it
            console.log(err);
        });
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

module.exports = router