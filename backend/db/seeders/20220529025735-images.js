'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
      {
        campusId: 1,
        url: 'https://unsplash.com/photos/I-NnLj-PsmQ',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 1,
        url: 'https://unsplash.com/photos/AuJHjDF-BF0',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 1,
        url: 'https://unsplash.com/photos/Fsjs5NS-QLw',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 2,
        url: 'https://unsplash.com/photos/XgcdAE1Gqlg',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 2,
        url: 'https://unsplash.com/photos/I-NnLj-PsmQ',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 2,
        url: 'https://unsplash.com/photos/s8fqX4_dBaM',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 3,
        url: 'https://unsplash.com/photos/hWqrI3CyPuM',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 3,
        url: 'https://unsplash.com/photos/T-tVt4xsCdE',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 3,
        url: 'https://unsplash.com/photos/dLifkLvc5t8',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 4,
        url: 'https://unsplash.com/photos/hthSFNDYU_s',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 4,
        url: 'https://unsplash.com/photos/Qj-5RbUb1UE',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 4,
        url: 'https://unsplash.com/photos/QGX7FpGX980',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 5,
        url: 'https://unsplash.com/photos/Vos_2og3jZg',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 5,
        url: 'https://unsplash.com/photos/CyvK_Z2pYXg',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 5,
        url: 'https://unsplash.com/photos/omeaHbEFlN4',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 6,
        url: 'https://unsplash.com/photos/A0Qs7iXf1l0',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 6,
        url: 'https://unsplash.com/photos/ba8bUAKjYWg',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 6,
        url: 'https://unsplash.com/photos/eLCTitD23xo',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 7,
        url: 'https://unsplash.com/photos/FqDTnSdb-PM',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 7,
        url: 'https://unsplash.com/photos/LbuF2is_IyU',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 7,
        url: 'https://unsplash.com/photos/1g9k67e63us',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 8,
        url: 'https://unsplash.com/photos/rz6jAofLz28',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 8,
        url: 'https://unsplash.com/photos/SOnbCnBKNaU',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 8,
        url: 'https://unsplash.com/photos/OUJEGUDTltc',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 9,
        url: 'https://unsplash.com/photos/B8SemO8zp7I',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 9,
        url: 'https://unsplash.com/photos/cQ09dIfwcB0',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 9,
        url: 'https://unsplash.com/photos/wsESL4NEkdM',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 10,
        url: 'https://unsplash.com/photos/8xhnoY5ua9o',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 10,
        url: 'https://unsplash.com/photos/onOdABjwC0M',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 10,
        url: 'https://unsplash.com/photos/tDSmhEFfasI',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 11,
        url: 'https://unsplash.com/photos/J2obtYIs7S8',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 11,
        url: 'https://unsplash.com/photos/eZC7jKh0K40',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 11,
        url: 'https://unsplash.com/photos/u_Bah910f4w',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 12,
        url: 'https://unsplash.com/photos/bwwh_OoEEAE',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 12,
        url: 'https://unsplash.com/photos/gCHfScq3VJc',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 12,
        url: 'https://unsplash.com/photos/0Qz0zj5-6hY',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 13,
        url: 'https://unsplash.com/photos/FD2VpTehplE',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 13,
        url: 'https://unsplash.com/photos/j6Jfexgca0M',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 13,
        url: 'https://unsplash.com/photos/2RouMSg9Rnw',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 14,
        url: 'https://unsplash.com/photos/UpYF6ibFud0',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 14,
        url: 'https://unsplash.com/photos/LgHghP14qeU',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 14,
        url: 'https://unsplash.com/photos/dwYY9NDj4_Q',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 15,
        url: 'https://unsplash.com/photos/_RWHOzKnv1M',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 15,
        url: 'https://unsplash.com/photos/irVlh7YbQRE',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 15,
        url: 'https://unsplash.com/photos/aiGYVfFsshM',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 16,
        url: 'https://unsplash.com/photos/E57BNhGGaGA',
        description: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 16,
        url: 'https://unsplash.com/photos/SYTO3xs06fU',
        description: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 16,
        url: 'https://unsplash.com/photos/9NUG56VAt4A',
        description: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 17,
        url: 'https://unsplash.com/photos/gU3rHe3HF54',
        description: 'Georgetown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 17,
        url: 'https://unsplash.com/photos/ewGMqs2tmJI',
        description: 'Georgetown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 17,
        url: 'https://unsplash.com/photos/EI5l9m83Xb4',
        description: 'Georgetown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 18,
        url: 'https://unsplash.com/photos/FlGV4mTmtA8',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 18,
        url: 'https://unsplash.com/photos/EdvLiVfQ36c',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 18,
        url: 'https://unsplash.com/photos/1MLJBD3twCU',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 19,
        url: 'https://unsplash.com/photos/VHFBDTwiIy4',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 19,
        url: 'https://unsplash.com/photos/XkKCui44iM0',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 19,
        url: 'https://unsplash.com/photos/VyyNcb4plSM',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 20,
        url: 'https://unsplash.com/photos/3aVlWP-7bg8',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 20,
        url: 'https://unsplash.com/photos/kuEMUoDZepY',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 20,
        url: 'https://unsplash.com/photos/y3BBVEpMl4E',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 21,
        url: 'https://unsplash.com/photos/txy8-jHMNZI',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 21,
        url: 'https://unsplash.com/photos/B-HnsuuouSE',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 21,
        url: 'https://unsplash.com/photos/hPkb0qGRUTw',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
