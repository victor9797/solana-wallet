const { Router } = require('express')
const router = Router()

router.get('/', function(req, res) {
    res.json({ message: 'Wallet endpoint'})
})

module.exports = router