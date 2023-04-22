const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const errorController = require('./controllers/404')

// app.engine('hbs', expressHbs());
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extend: false})); 
// this is to add the css file to html because the method which we know dont work
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes); 

app.use(errorController.get404);
 
app.listen(3000);

// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/404');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes.routes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// app.listen(3000);