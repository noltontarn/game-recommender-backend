const router = require('express').Router()

const testRouters = require('./test/routers')

router.use(testRouters)
router.get('/', (req, res) => {
    console.log(process.env.TEST)
    res.json({
        message: "This is a test."
    })
})
module.exports = router