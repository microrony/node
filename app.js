const express = require('express');
const bodyParser = require('body-parser');
const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/admin', adminRouters);
app.use(shopRouters);

app.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
