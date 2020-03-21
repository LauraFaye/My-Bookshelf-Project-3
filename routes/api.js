const router = require("express").Router();
const db = require("../models")

router.post("/savebook", (req, res) => {
    console.log(req.body)
})

module.exports=router