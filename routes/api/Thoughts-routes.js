const router = require('express').Router()
const thoughtControler = require('../../controllers/Thoughts-controller')

router.route('/')
.get(thoughtControler.getAllthoughts)
.post(thoughtControler.createThought)

router.route('/:id')
.get(thoughtControler.getthoughtsById)
.put(thoughtControler.updateThoughts)
.delete(thoughtControler.deleteThoughts)

router.route('/:thoughtId/reactions')
.post(thoughtControler.createReaction)

router.route('/:thoughtId/reactions/:reactionId')
.delete(thoughtControler.deleteReaction)

module.exports = router



