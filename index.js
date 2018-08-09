const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');

const contacts = require('./api/contacts');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/contacts', contacts.get);
app.post('/contacts', contacts.add);
app.delete('/contacts/:id', contacts.deletebyId);

models.sequelize.sync().then(function() {
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
});
