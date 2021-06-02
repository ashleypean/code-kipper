const express = require('express')
const router = express.Router()
const registerController = require('../controllers/registerController')

//DON'T UNCOMMENT
// router.get('/', (req, res) => {
//   Users.find({}, (err, data) => 
//     res.send({data, string: 'all users'})
//   )
// })

router.post('/', registerController.checkForExistingUser, registerController.createUser, registerController.createSession)

router.post('/', registerController.checkForExistingUser, registerController.createUser, registerController.createSession)

module.exports = router