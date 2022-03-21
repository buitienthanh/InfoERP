const express = require('express');
const router = express.Router();
const dboperations = require('./dboperations');

router.route('/users/registered-users').get((request,response)=>{
    dboperations.getRegisteredUsers().then(result => {
       response.json(result[0]);
    })
 
})

router.route('/users/registered-users').post((request,response)=>{

    let users = {...request.body}
 
    dboperations.addRegisteredUsers(users).then(result => {
       response.status(200).json(result);
    })
 
 })

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})

module.exports = router