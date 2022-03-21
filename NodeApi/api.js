const dboperations = require('./dboperations');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.route('/registeredUsers').get((request,response)=>{
   dboperations.getRegisteredUsers().then(result => {
      response.json(result[0]);
   })

})

router.route('/sendMail').post((request,response)=>{

   let infor = {...request.body}
   
   dboperations.sendEmailTemplate(infor).then(result => {
      response.status(200).json(result);
   })

})

// router.route('/orders').get((request,response)=>{

//     dboperations.getOrders().then(result => {
//        response.json(result[0]);
//     })

// })

// router.route('/orders/:id').get((request,response)=>{

//     dboperations.getOrder(request.params.id).then(result => {
//        response.json(result[0]);
//     })

// })

// router.route('/orders').post((request,response)=>{

//     let order = {...request.body}

//     dboperations.addOrder(order).then(result => {
//        response.status(201).json(result);
//     })

// })

router.route('/registeredUsers').post((request,response)=>{

   let users = {...request.body}

   dboperations.addRegisteredUsers(users).then(result => {
      response.status(200).json(result);
   })

})


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

var port = process.env.PORT || 9100;
app.listen(port);

console.log('InfoERP API is runnning at ' + port);



