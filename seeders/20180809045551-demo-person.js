'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const demoUsers = [
      {
        name: 'mhaidarhanif',
        email: 'mhaidarhanif@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'michaeltamsil',
        email: 'michaeltamsil@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'amirul-inc',
        email: 'amirul@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'abbayosua',
        email: 'abba@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fabilqis',
        email: 'fadillah.bilqis@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'gunturkh',
        email: 'guntur.kh@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'indrolie',
        email: 'indrolie@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mayasopiee',
        email: 'mayasopiee@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'alifraher',
        email: 'alifraher@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ariebrainware',
        email: 'ariebrainware@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'wondoindra',
        email: 'wondoindra@example.com',
        phonenumber: '12343242342',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    return queryInterface.bulkInsert('people', demoUsers, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('people', null, {});
  }
};
