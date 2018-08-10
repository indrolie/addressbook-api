const models = require('../../models');

const contacts = {
  //get all contact
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

  //get one contact by id
  getbyId: (req, res) => {
    const id = req.params.id;

    models.people
      .findOne({
        where: {
          id: id
        }
      })
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

  //add one contact
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

  //update one contact by id
  updatebyId: (req, res) => {
    models.people.update(
      {
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phoneNumber,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    models.people
      .findOne({
        where: { id: req.params.id }
      })
      .then(people => {
        res.status(200).send(people);
      });
  },

  //delete one contact by id
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
  },

  //delete all contact
  delete: (req, res) => {
    const id = req.params.id;

    models.people
      .destroy({
        where: {}
      })
      .then(
        res.send({
          message: 'Data deleted!'
        })
      );
  }
};

module.exports = contacts;
