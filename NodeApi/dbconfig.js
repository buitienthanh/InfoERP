
const config = {
    user :'sa',
    password :'Darklord1213@',
    server:'DESKTOP-O2BDQ4J',
    database:'InfoERP_Landing',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 1433,
    mail: {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth :{
            user: "7430ab27e0fcc4",
            pass: "df332a7348410f"
        }
    }
}

module.exports = config; 
