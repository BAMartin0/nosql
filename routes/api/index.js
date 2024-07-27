const router = require("express").Router();
// import the routes

const thoughtRoutes = require("./thoughtRoutes"); 
const userRoutes = require('./userRoutes'); 

router.use('/thoughts', thoughtRoutes); 
router.use('/users', userRoutes);

// create the routes you want to use from the files
//AT EAVH TABLE WE CURRENTLY SHOW YOU HOW TO DO 5 GENERIC THING
//1 . GET ALL ROWS IN TABLE - "/" -> [{mODEL}]
//2. GET A ROW - "/:_id" -> {model}
//3. Delete a row -> ":/id" -> {model}
//4. Create a row - "/" -> {model}
//5. Update a row - "/:_id" -> req.body of what we will update
//WE BUILD ON THESE PRINCIPLES BECAUSE NOW YOU MODELS HAVE SUBDOCUMENTS
// MONGO DB IS FOCUSED ON HOW USERS ACCESS DATA.

module.exports = router;
// JS DATATYPE: OBJECT, ARRAY,NUMBER, BOOLEAN, STRING