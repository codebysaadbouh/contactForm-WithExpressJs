const express = require('express');
require('dotenv').config()
const contactValidator = require('../middlewares/validators/contact.validator')
const sendEmail = require('../middlewares/services/email.services')
const router = express.Router();


// NOTE > get home page 

router.get('/', (req, res) => {
    res.render('index', {title: "Home"});
})


// NOTE > get contact page

router.get('/contact', (req, res ) => {
    res.render('contact/contact', {title: "Contact"});
})

router.post('/contact', contactValidator, sendEmail); 



module.exports = router; 