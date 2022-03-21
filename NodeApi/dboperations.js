var config = require('./dbconfig');
const sql = require('mssql');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
require('dotenv').config();
const path = require('path');


async function getRegisteredUsers() {
    try{
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from RegisteredUsers");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// async function getOrders() {
//     try {
//         let pool = await sql.connect(config);
//         let products = await pool.request().query("SELECT * from Orders");
//         return products.recordsets;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// async function getOrder(orderId) {
//     try {
//         let pool = await sql.connect(config);
//         let product = await pool.request()
//             .input('input_parameter', sql.Int, orderId)
//             .query("SELECT * from Orders where Id = @input_parameter");
//         return product.recordsets;

//     }
//     catch (error) {
//         console.log(error);
//     }
// }


// async function addOrder(order) {

//     try {
//         let pool = await sql.connect(config);
//         let insertProduct = await pool.request()
//             .input('Id', sql.Int, order.Id)
//             .input('Title', sql.NVarChar, order.Title)
//             .input('Quantity', sql.Int, order.Quantity)
//             .input('Message', sql.NVarChar, order.Message)
//             .input('City', sql.NVarChar, order.City)
//             .execute('InsertOrders');
//         return insertProduct.recordsets;
//     }
//     catch (err) {
//         console.log(err);
//     }

// }

async function addRegisteredUsers(users) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('Name', sql.NVarChar, users.Name)
            .input('TaxCode', sql.NVarChar, users.TaxCode)
            .input('PhoneNumber', sql.NVarChar, users.PhoneNumber)
            .input('Email', sql.NVarChar, users.Email)
            .execute('InsertRegisteredUsers');
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function sendEmailTemplate({ from, to, subject, text, content }) {
    try {
        const transporter = nodemailer.createTransport(
            {
                host: config.mail.host,
                port: config.mail.port,
                auth: {
                    user: process.env.EMAIL || config.mail.auth.user, // TODO: your gmail account 
                    pass: process.env.PASSWORD || config.mail.auth.pass // TODO: your gmail password
                }
            }
        );
    
        const options = {
            viewEngine: {
              extName: ".hbs",
              partialsDir: path.resolve(__dirname, "views"),
              defaultLayout: false        // <-----   added this
            },
            viewPath: path.resolve(__dirname, "./views/"),
            extName: ".handlebars"
          };
        
        transporter.use("compile", hbs(options));
    
        let mailOptions = {
                    from: from, // TODO: email sender
                    to: to, // TODO: email receiver
                    subject: subject,
                    text: text,
                    template: 'index',
                    context: {
                        name: content.name,
                        email: content.email,
                        taxCode: content.taxCode,
                        phoneNumber: content.phoneNumber
                    } // send extra values to template
        };
    
        return await transporter.sendMail(mailOptions);
    }catch (err){
        console.log(err);
    }
}

module.exports = {
    // getOrders: getOrders,
    // getOrder : getOrder,
    // addOrder : addOrder,
    getRegisteredUsers : getRegisteredUsers,
    addRegisteredUsers: addRegisteredUsers,
    sendEmailTemplate : sendEmailTemplate
}