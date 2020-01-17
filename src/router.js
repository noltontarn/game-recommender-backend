const router = require('express').Router()

router.get('/', (req, res) => {
    console.log(process.env.TEST)
    res.json({
        message: "This is a test."
    })
})
module.exports = router