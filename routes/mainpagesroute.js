const express = require('express');
var router = express.Router();

//Route 1
router.use("/", (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs");
})