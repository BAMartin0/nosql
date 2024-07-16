const router = require("express").Router();
// import the controller
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought, 
    deleteThought, 
    addReaction, 
    removeReaction,
    
} = require('../../controllers/thoughtController')

// create the routes you want to use and execute the controller functions.
router.route('/').get(getThoughts).post(createThought);

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);


module.exports = router;
