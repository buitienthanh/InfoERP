const express = require('express');
const router = express.Router();
const dboperations = require('./dboperations');

router.route('/mail/send-mail').post((request,response)=>{

    let infor = {...request.body}
    
    dboperations.sendEmailTemplate(infor).then(result => {
       response.status(200).json(result);
    })
 
})

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})

module.exports = router