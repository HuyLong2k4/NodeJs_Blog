const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');

const db = require('./config/db');

const app = express();
const port = 3000;

const routes = require('./routes');

//Connect to DB
db.connect();
//midleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
// temple engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
// http logger
app.use(morgan('combined'));

// route init

routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
