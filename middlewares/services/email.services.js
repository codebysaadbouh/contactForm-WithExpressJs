require('dotenv').config()
const nodemailer = require("nodemailer");

const sendMail = (req, res, next) => {
    // NOTE Récupération des données du formulaire et Envoie du mail
    console.log(req.body);

    // NOTE Création d'un transporter
    var transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth:{
            user: process.env.USER_mail,
            pass: process.env.PASS_mail
        }
    }); 

    var message = "Email :"+req.body.email+"<br>"+"Message : <br>"+req.body.message+"<br>"+req.body.firstname+" "+req.body.lastname; 

    // construction du mail 
    var mailOptions = {
        from: req.body.email,
        to: process.env.MAIL_to,
        subject: req.body.subject, 
        html: message
    }

    // Envoie du mail
    transporter.sendMail(mailOptions, (err, infos)=> {
        if(err){
            console.log(err); 
            res.render('contact/contact', {title: "Contact", err: err});
            next(); 
        }else{
            console.log(infos);
            res.render('contact/contact', { title: "Contact", success: infos});
            next(); 
        }
    })
}

module.exports = sendMail; 