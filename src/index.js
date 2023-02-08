const express = require('express');

const setupViewEngine = require('./config/viewEngine');
const config = require('./config/config');
const routes = require('./config/routes');

const app = express();
setupViewEngine(app);

app.use(routes);

app.listen(config.PORT,()=>console.log(`Server is running on PORT ${config.PORT}...`))

