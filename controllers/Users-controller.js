const mongoose = require('mongoose')
const {Users} = require('../models')

const userController = {
    //get all users
    getAllUsers(req,res) {
        Users.find({})
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    getUserById({params}, res){
        Users.findById({_id:mongoose.Types.ObjectId(params.id)})
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    createUser({body}, res) {
        Users.create(body)
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    updateUser({body, params}, res) {
        console.log(mongoose.Types.ObjectId(params.id))
        Users.updateOne({_id: mongoose.Types.ObjectId(params.id)}, body)
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    deleteUser({params}, res) {
        Users.deleteOne({_id:mongoose.Types.ObjectId(params.id)})
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    createFriend({body},res) {
        Users.updateOne({_id:mongoose.Types.ObjectId(params.userId)},{$push:{friends:body}})
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
}

module.exports = userController;