const express = require('express');
require('dotenv').config()
const nodemailer = require("nodemailer");
const { validator } = require('node-input-validator');
const router = express.Router();


// NOTE > get home page 

router.get('/', (req, res) => {
    res.render('index', {title: "Home"});
})


// NOTE > get contact page

router.get('/contact', (req, res ) => {
    res.render('contact', {title: "Contact"});
})

router.post('/contact',(req, res) => {

    // NOTE Récupération des données du formulaire et Envoie du mail
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth:{
            user: process.env.USER_mail,
            pass: process.env.PASS_mail
        }
    }); 
    var mailOptions = {
        from: req.body.email,
        to: 'saadbouh.code@gmail.com',
        subject: req.body.subject, 
        text: req.body.message
    }

    

    transporter.sendMail(mailOptions, (err, infos)=> {
        if(err){
            console.log(err); 
            res.render('contact', {
                title: "Contact",
                err: err});
        }else{
            console.log(infos);
            res.render('contact', {
                title: "Contact",
                success: infos});
        }
    })
})



module.exports = router; 