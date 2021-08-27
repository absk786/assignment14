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

        // ADD friend to friend's list
        createFriend({params}, res) {
            Users.findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(params.id)},
                { $push: {friends:params.friendId } },
                { new: true, runValidators: true }
            )
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this id was found' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
        }, 

    //need to fix thisss
    deleteFriend({params},res) {
        Users.findOneAndUpdate(
            { _id: mongoose.Types.ObjectId(params.id)},
            { $pull: {friends:params.friendId } }
        )
    .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },
}

module.exports = userController;