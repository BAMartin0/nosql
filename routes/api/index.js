const router = require("express").Router();
// import the routes

const thoughtRoutes = require("./thoughtRoutes"); 
const userRoutes = require('./userRoutes'); 

router.use('/thoughts', thoughtRoutes); 
router.use('/users', userRoutes);

// create the routes you want to use from the files

module.exports = router;
