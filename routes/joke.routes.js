const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.get("/api/test", JokeController.test),
        // CREATE
        app.post("/api/jokes", JokeController.createJoke),
        // READ
        app.get("/api/jokes", JokeController.allJokes),
        app.get("/api/jokes/:joke_id", JokeController.oneJoke),

        // UPDATE
        app.put("/api/jokes/:joke_id", JokeController.updateJoke),

        // DELETE
        app.delete("/api/jokes/:joke_id", JokeController.deleteJoke)
}