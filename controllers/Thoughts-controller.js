const mongoose = require('mongoose')
const {Users, Thought} = require('../models')


const thoughtControler = {

    //get all thoughts
    getAllthoughts(req,res) {
        Thought.find({})
        .then(dbThoughts => res.json(dbThoughts))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    //get thoughts by id
    getthoughtsById({params},res) {
        Thought.find({_id:mongoose.Types.ObjectId(params.id)})
        .then(dbThoughts => res.json(dbThoughts))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
    //create a new thought
    createThought({body}, res) {
        Thought.create(body)
        .then(dbThoughts => res.json(dbThoughts))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    //update thoughts by id
    updateThoughts({body,params},res) {
        Thought.updateOne({_id:mongoose.Types.ObjectId(params.id)}, body)
        .then(dbThoughts => res.json(dbThoughts))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
    //delete thougth by id
    deleteThoughts({params},res) {
        Thought.deleteOne({_id:mongoose.Types.ObjectId(params.id)})
        .then(dbThoughts => res.json(dbThoughts))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
  
    createReaction({params,body},res) {
        Thought.updateOne({_id:mongoose.Types.ObjectId(params.thoughtId)}, {$push:{reactions:body}})
        .then(dbThoughts => res.json(dbThoughts))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
  
    deleteReaction({params},res) {

        console.log('thoughId', params.thoughtId, 'reactionID', params.reactionId)
        Thought.updateOne({_id:mongoose.Types.ObjectId(params.thoughtId)}, {$pull:{ "reactions": { _id: mongoose.Types.ObjectId(params.reactionId) }}})
        .then(dbThoughts => res.json(dbThoughts))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    }

}






module.exports = thoughtControler;