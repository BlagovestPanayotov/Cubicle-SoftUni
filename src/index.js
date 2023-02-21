const express = require('express');
const cookieParser = require('cookie-parser');

const setupViewEngine = require('./config/viewEngine');
const config = require('./config/config');
const routes = require('./config/routes');
const database = require('./config/database');

const app = express();
setupViewEngine(app);
database(app);

app.use(cookieParser());
app.use(routes);

app.listen(config.PORT, () => console.log(`Server is running on PORT ${config.PORT}...`))

