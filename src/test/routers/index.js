const router = require('express').Router()

const { 
    insertTestController,
    getTestController 
} = require('../controllers')

router.post('/test-post', insertTestController)
router.get('/test-get', getTestController)

module.exports = router