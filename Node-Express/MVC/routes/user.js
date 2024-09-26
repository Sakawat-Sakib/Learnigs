const express = require('express');
const router = express.Router();
const {handleGetAllUsers,handleGetUserById,handleUpdateById,handleDeleteById,handleAddUser} = require('../controllers/user');



//ROUTE
router.route('/')
.get(handleGetAllUsers)
.post(handleAddUser)

router.route('/:id') //write this way for different req with same route
.get(handleGetUserById)
.patch(handleUpdateById)
.delete(handleDeleteById)


//exports
module.exports = router;