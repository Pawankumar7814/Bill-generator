const express = require('express');
let router = express.Router();

//Route 1
router.get("/", (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs", { data: "" });
})

router.get("/index", (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs", { data: "" });
});

router.get("/*", (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs", { data: "" });
});


router.post("/print", (req, res) => {
    let userdata = {
        F_name: req.body.fname,
        l_name: req.body.lname,
        add: req.body.address,
        City: req.body.city,
        state: req.body.state,
        post: req.body.postalcode,
        amount: req.body.amt,
        qty: req.body.qty
    }
    console.log(userdata);
    res.status(200).render("../views/bill/bill.ejs", { data: userdata });
    // res.status(200).render("../views/mainpages/index.ejs", { v1: F_name, v2: l_name, v3: add, v4: City, v5: state, v6: post, v7: amount, v8: qty });
})

module.exports = router;