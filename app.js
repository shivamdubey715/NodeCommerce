const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extend: false})); 
// this is to add the css file to html because the method which we know dont work
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes); 

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
 
app.listen(3000);

