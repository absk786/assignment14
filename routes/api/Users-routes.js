const router = require('express').Router()
const userController = require('../../controllers/Users-controller')


router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

router.route('/:id')
.put(userController.updateUser)
.get(userController.getUserById)
.delete(userController.deleteUser)

// Set up PUT, DELETE for friends at /api/users/:userId/friends/:friendId
router.route('/:id/friends/:friendId')
    .put(userController.createFriend)
    .delete(userController.deleteFriend)


module.exports = router;