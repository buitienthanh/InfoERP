var config = require('../../config');
const sql = require('mssql');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
require('dotenv').config();
const path = require('path');

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
            viewPath: path.resolve(__dirname, "../../views/"),
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
    sendEmailTemplate : sendEmailTemplate
}