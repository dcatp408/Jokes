const { response } = require("express")
const Joke = require("../models/joke.models")


module.exports.test = (req, res) => {
    res.json("Testing")
}

// CREATE 
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke =>res.json(newJoke)) //SUCCESS
        .catch(err => res.json(err)) //NOT SUCCESS
}

//READ
module.exports.allJokes = (req, res) => {
    Joke.find({})
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err))
}

module.exports.oneJoke = (req, res) => {

    const {joke_id} = req.params
    Joke.find({_id: joke_id})
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err))
}

// UPDATE

module.exports.updateJoke = (req,res) => {
    const {joke_id} = req.params
    Joke.findByIdAndUpdate({_id: joke_id}, req.body, {new:true , runValidators:true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
}

// DELETE

module.exports.deleteJoke = (req, res) => {
    const {joke_id} = req.params

    Joke.findOneAndDelete({_id: joke_id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}