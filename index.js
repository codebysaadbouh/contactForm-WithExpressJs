const express = require('express');
const bodyParser = require('body-parser');
// Initialize Application
const App = express();
const indexRouter = require('./routes/index.routes')
// Configure server
const Port = process.env.Port || 1995;
const Hostname = process.env.Localhost || '127.0.0.1';


// Getting Started Here
App.set('views', 'Templates'); 
App.set('view engine', 'twig'); 


// NOTE > parse application/x-www-form-urlencoded
App.use(bodyParser.urlencoded({ extended: false }))
 
// NOTE > parse application/json
App.use(bodyParser.json())

/**
 * NOTE We can have middleware that Applies to our entire Application and is defined by App.use(()=>{});
 *      A middleware is a function that can access directly the request and the answer, it is also able to access the next middleware with next;
*/
// To serve static files such as images, CSS files and JavaScript files, use the built-in middleware function express.static in Express.
App.use(express.static('public'));

/**
 * App.get('/', (req, res) => {
 *   res.sendFile(__dirname + `/index.html`);
 *})
 */




App.use('/', indexRouter)

// Listen server
App.listen(
    Port,
    Hostname,
    () => {
        console.log(`Server started on http://${Hostname}:${Port}`);
        console.log(`Stop server with Ctrl + C`); 
    }
)
