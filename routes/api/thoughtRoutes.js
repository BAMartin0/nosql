const router = require("express").Router();
// import the controller
const {
    getThoughts,
} = require('../../controllers/thoughtController')

// create the routes you want to use and execute the controller functions.
router.route('/').get(getThoughts);

module.exports = router;
