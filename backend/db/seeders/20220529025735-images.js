'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
      {
        campusId: 1,
        url: 'https://images.unsplash.com/photo-1619139079319-ba9ff149a8c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MjI4Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 1,
        url: 'https://images.unsplash.com/photo-1631852164391-90e8534a12e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MjMxMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 1,
        url: 'https://images.unsplash.com/photo-1631852447294-db966fe4f0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MjM1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 2,
        url: 'https://images.unsplash.com/photo-1602536422218-2009cae49eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MjM4Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 2,
        url: 'https://images.unsplash.com/photo-1651500843673-e469fc229a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MjY1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 2,
        url: 'https://images.unsplash.com/photo-1633297587920-abb3ec718610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTk5NDAwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 3,
        url: 'https://images.unsplash.com/photo-1622397333309-3056849bc70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MjY4Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 3,
        url: 'https://images.unsplash.com/photo-1559135197-8a45ea74d367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0Nzc3MDM5Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 3,
        url: 'https://images.unsplash.com/photo-1579862325998-44e49ab74138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mjc1Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 4,
        url: 'https://images.unsplash.com/photo-1574893156351-c2e3bbb5a5c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MTk1Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 4,
        url: 'https://images.unsplash.com/photo-1587908401327-648d15e7b73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mjc4Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 4,
        url: 'https://images.unsplash.com/photo-1590594333808-1a0f9933f007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MjgzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 5,
        url: 'https://images.unsplash.com/photo-1581618049012-d27c45edd7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mjg2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 5,
        url: 'https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NTY1OTA4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 5,
        url: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 6,
        url: 'https://images.unsplash.com/photo-1622060920348-16e677caf61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mjk0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 6,
        url: 'https://images.unsplash.com/photo-1603707579489-3510cfcf1efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mjk3MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 6,
        url: 'https://images.unsplash.com/photo-1472858192915-0131aeda1404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mjk5NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 7,
        url: 'https://images.unsplash.com/photo-1590594579286-8138f8489512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzAyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 7,
        url: 'https://images.unsplash.com/photo-1562883782-0963048d5e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzA0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 7,
        url: 'https://images.unsplash.com/photo-1584716775086-64a3229961b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzA3Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 8,
        url: 'https://images.unsplash.com/photo-1629119025473-4c52a0a31f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzEwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 8,
        url: 'https://images.unsplash.com/photo-1570385443797-7fed21c50f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzEyNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 8,
        url: 'https://images.unsplash.com/photo-1629119026935-c53c8e886015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzE0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 9,
        url: 'https://images.unsplash.com/photo-1605212297995-dd77a9f4d509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzE3MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 9,
        url: 'https://images.unsplash.com/photo-1560351161-32085581d06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MjcwMzg0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 9,
        url: 'https://images.unsplash.com/photo-1517694381106-c9ca8944559a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzIxNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 10,
        url: 'https://images.unsplash.com/photo-1523711011208-8268846ca794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzI0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 10,
        url: 'https://images.unsplash.com/photo-1531429745839-827a6a45e040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 10,
        url: 'https://images.unsplash.com/photo-1508760215803-36f2ec2b7713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyODYyNTY4Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 11,
        url: 'https://images.unsplash.com/photo-1627626308661-034701a77028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzMxMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 11,
        url: 'https://images.unsplash.com/photo-1627626308681-546cb2dddb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzMzNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 11,
        url: 'https://images.unsplash.com/photo-1615315926212-9156c009347d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzM2Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 12,
        url: 'https://images.unsplash.com/photo-1495603157807-8539e80db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzM4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 12,
        url: 'https://images.unsplash.com/photo-1597339045126-4d2d392cfb5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzQyMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 12,
        url: 'https://images.unsplash.com/photo-1600571776717-386df4d0a882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzQ0NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 13,
        url: 'https://images.unsplash.com/photo-1619982389793-71935a464d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzQ3MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 13,
        url: 'https://images.unsplash.com/photo-1620450169250-b0f60b59a43a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzQ5NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 13,
        url: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NjIzNDczNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 14,
        url: 'https://images.unsplash.com/photo-1608845920884-3c88800feebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzUzOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
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
        url: 'https://images.unsplash.com/photo-1623607769583-f95269221eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzU2Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 15,
        url: 'https://images.unsplash.com/photo-1626060490950-fabf0d72ca8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzU4NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 15,
        url: 'https://images.unsplash.com/photo-1554005702-71599e422c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzYwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 15,
        url: 'https://images.unsplash.com/photo-1631153127293-8588327c515c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzYzNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 16,
        url: 'https://images.unsplash.com/photo-1600047050118-8671c626b333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzY2MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 16,
        url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        description: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 16,
        url: 'https://images.unsplash.com/photo-1609445333560-e03ba271b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzgyMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 17,
        url: 'https://images.unsplash.com/photo-1608595528887-baa0e6c41d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mzg0Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Georgetown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 17,
        url: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        description: 'Georgetown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 17,
        url: 'https://images.unsplash.com/photo-1543189624-1fd1d12ee0fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mzg5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Georgetown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 18,
        url: 'https://images.unsplash.com/photo-1544913402-cc305084030c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3MzkxNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 18,
        url: 'https://images.unsplash.com/photo-1600847724803-72991a6d5aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mzk0NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 18,
        url: 'https://images.unsplash.com/photo-1626036283718-d44bfdea7332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mzk2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
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
        url: 'https://images.unsplash.com/photo-1561063139-e183e66909c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3Mzk5NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 19,
        url: 'https://images.unsplash.com/photo-1609964956781-519678450be5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3NDAyMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 20,
        url: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 20,
        url: 'https://images.unsplash.com/photo-1562585195-97aff4b3848c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 20,
        url: 'https://images.unsplash.com/photo-1610741686854-5948cd981569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3NDA4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 21,
        url: 'https://images.unsplash.com/photo-1647120481982-940aca58fc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3NDExMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 21,
        url: 'https://images.unsplash.com/photo-1609798705478-a4aa577ac1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NzU3NjMwOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 21,
        url: 'https://images.unsplash.com/photo-1575405805195-695291eb22de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDI3NDE1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
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
