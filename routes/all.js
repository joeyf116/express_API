const express = require("express"),
    router = express.Router();

const data = {
    powerRangers: [
        {name: 'Jason', zord: 'T-Rex'},
        {name: 'Billy', zord: "Triceratops"}
    ]
}

    router.get("/", (req,res) => {

        res.status(200).render('template', {
        locals: {
            title: '<h1 style="text-align:center">A listing of Rangers</h1>',
            arrayOfData: data.powerRangers
        },
        partials: {
            partial: 'partial-all'
        }
    });
});

module.exports = router;