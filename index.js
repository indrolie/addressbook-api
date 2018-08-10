const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');

const contacts = require('./api/contacts');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/contacts', contacts.get);
app.get('/contacts/:id', contacts.getbyId);
app.post('/contacts', contacts.add);
app.put('/contacts/:id', contacts.updatebyId);
app.delete('/contacts/:id', contacts.deletebyId);
app.delete('/contacts', contacts.delete);

models.sequelize.sync().then(function() {
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
});
