"use strict";


const express = require("express");
const app = express();
const compression = require("compression");
const helmet = require("helmet");

/// MiddleWare
app.use(compression());
app.use(helmet());

/// Routes
const rootController = require("./routes/index"),
    allController = require("./routes/all"),
    wpController = require("./routes/wp"),
    personController = require("./routes/person"),
    yearController = require("./routes/year"),
    greetController = require("./routes/greet"),
    catsController = require("./routes/cats"),
    dogsController = require("./routes/dogs"),
    catsAndDogsController = require("./routes/cats_and_dogs");

/// Port Opening
app.listen(3333, function() {
    console.log("listening on port 3333");
});

/// Exported Routes
app.use('/', rootController);
app.use("/all", allController);
app.use("/wp", wpController);
app.use("/person", personController);
app.use("/year", yearController);
app.use("/greet", greetController);
app.use("/cats", catsController);
app.use("/dogs", dogsController);
app.use("/cats_and_dogs", catsAndDogsController);