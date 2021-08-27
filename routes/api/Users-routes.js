const router = require('express').Router()
const userController = require('../../controllers/Users-controller')


router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

router.route('/:id')
.put(userController.updateUser)
.get(userController.getUserById)
.delete(userController.deleteUser)

router.route('/:userId/friends')
.post(userController.createFriend)

router.route('/:userId/friends/:friendsId')

module.exports = router;