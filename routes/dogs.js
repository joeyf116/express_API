const express = require("express"),
    router = express.Router();

router.get("/", function(req,res){
    let snippet = `<h1>Woof!</h1>`;
    
    res.status(200)
    .send(snippet)
    .end()
});

module.exports = router;