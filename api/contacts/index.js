const models = require('../../models');

const contacts = {
  //get contact
  get: (req, res) => {
    models.people
      .findAll()
      .then(people => {
        res.status(200).send({
          people
        });
      })
      .catch(error => {
        res.status(400).send({
          error
        });
      });
  },

  //post contact
  add: (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;

    if (name || email || phoneNumber) {
      models.people
        .build({
          name: name,
          email: email,
          phonenumber: phoneNumber,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .save()
        .then(people => {
          res.status(200).send(people);
        });
    } else {
      res.send({
        message: 'Please insert the contact name and email.'
      });
    }
  },

  //delete all contact
  deletebyId: (req, res) => {
    const id = req.params.id;

    models.people
      .destroy({
        where: {
          id: id
        }
      })
      .then(
        res.send({
          message: 'Data deleted!'
        })
      );
  }
};

module.exports = contacts;
