const express = require("express"),
    router = express.Router();

    
    router.get("/", (req,res) => {
    const { age } = req.query;
    let snippet = `<h1>You were born in ${2019 - age}.</h1>`;
    
    res.status(200)
        .send(snippet)
        .end();
    });

module.exports = router;