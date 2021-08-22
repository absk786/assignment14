const router = require('express').Router()
const thoughtsRoutes = require('./Thoughts-routes')
const usersRoutes = require('./Users-routes')

router.use('/users', usersRoutes)
router.use('/thoughts', thoughtsRoutes)

module.exports = router;