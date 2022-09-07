const { Router } = require('express')
const router = Router()
const walletRouter = require('./wallet/index')

router.use('/wallet', walletRouter)

// Root
router.get('/', (req, res) => {
    res.json({ message: 'Api endpoint'})
})

module.exports = router