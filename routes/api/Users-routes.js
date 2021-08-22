const router = require('express').Router()
const userController = require('../../controllers/Users-controller')


router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

router.route('/:id')
.put(userController.updateUser)
.get(userController.getUserById)
.delete(userController.deleteUser)


module.exports = router;