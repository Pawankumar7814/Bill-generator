const express = require('express');
let router = express.Router();

//Route 1
router.get("/", (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs", { v1: "", v2: "", v3: "", v4: "", v5: "", v6: "", v7: "", v8: "" });
})

router.get("/index", (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs", { v1: "", v2: "", v3: "", v4: "", v5: "", v6: "", v7: "", v8: "" });
});

router.get("/*", (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs", { v1: "", v2: "", v3: "", v4: "", v5: "", v6: "", v7: "", v8: "" });
});

router.post("/print", (req, res) => {
    let F_name = req.body.fname;
    let l_name = req.body.lname;
    let add = req.body.address;
    let City = req.body.city;
    let state = req.body.state;
    let post = req.body.postalcode;
    let amount = req.body.amt;
    let qty = req.body.qty;
    res.status(200).render("../views/mainpages/index.ejs", { v1: F_name, v2: l_name, v3: add, v4: City, v5: state, v6: post, v7: amount, v8: qty });
})

module.exports = router;