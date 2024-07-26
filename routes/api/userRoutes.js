const router = require("express").Router();
// import the controller

const {
    getUsers, 
    getSingleUser,
    createUser, 
    updateUser, 
    deleteUser

} = require('../../controllers/userController')

// create the routes you want to use fand execute the controller functions.

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

module.exports = router;
