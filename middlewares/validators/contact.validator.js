const { Validator } = require('node-input-validator');

const contactValidator = (req, res, next) => {

    const formIsValid = new Validator(req.body, {
        email: 'required|email',
        subject: 'required',
        message: 'required'
    }); 
    formIsValid.check().then((matched) => {
        if(!matched) {
            // res.status(422).send(formIsValid.errors); 
            res.render('contact/contact', {title: "Contact", formError: formIsValid.errors})
            return
        }
        next(); 
    }); 
}

module.exports = contactValidator; 