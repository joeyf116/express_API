const express = require("express");
    router = express.Router();

router.get("/:person_name", (req,res) => {
    console.log(req.params);
    const {person_name} = req.params;
    const snippet = `<h1>Hi ${person_name}!</h1>`;

    res.status(200)
    .send(snippet)
    .end()
});

module.exports = router;