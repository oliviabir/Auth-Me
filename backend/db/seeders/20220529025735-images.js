'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
      {
        campusId: 22,
        url: 'https://images.app.goo.gl/gUDdyc5ScVLkf3wK7',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 22,
        url: 'https://images.app.goo.gl/oBJRAGHmA6kyHSr26',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 22,
        url: 'https://images.app.goo.gl/gh43vkCE5pxcquWTA',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 22,
        url: 'https://images.app.goo.gl/HcLn2asTPM7qe6dU7',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 22,
        url: 'https://images.app.goo.gl/FyYpurU3B887sZnU9',
        description: 'Stanford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 23,
        url: 'https://images.app.goo.gl/UVMpyYFKxCruuuwM8',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 23,
        url: 'https://images.app.goo.gl/mcrF6gcWHSuChPqR9',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 23,
        url: 'https://images.app.goo.gl/xp3wiPUYZeakRUtW8',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 23,
        url: 'https://images.app.goo.gl/SRyeEptNbXbTpVji9',
        description: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 23,
        url: 'https://images.app.goo.gl/ZG5BwrZbeapdtAW57',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 24,
        url: 'https://images.app.goo.gl/YPDeLG1JxEwrgYRx7',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 24,
        url: 'https://images.app.goo.gl/f4yK1VKVsqqbw4FS8',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 24,
        url: 'https://images.app.goo.gl/x2gKpGpNYeiR4qZR9',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 24,
        url: 'https://images.app.goo.gl/VxqHBi2U2qYSgZmK8',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 24,
        url: 'https://images.app.goo.gl/1t6pJTraD5kNDfcMA',
        description: 'Harvard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 25,
        url: 'https://images.app.goo.gl/BSWcmZS3D7AnXovLA',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 25,
        url: 'https://images.app.goo.gl/cPmgpc8u53XLKx2v5',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 25,
        url: 'https://images.app.goo.gl/EssFDFNxr9DvLupe8',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 25,
        url: 'https://images.app.goo.gl/uguUZHmngRCczTEY8',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 25,
        url: 'https://images.app.goo.gl/H4AA87ufAan77hQu5',
        description: 'MIT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 26,
        url: 'https://images.app.goo.gl/XrUXabaeJSBzGkQd7',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 26,
        url: 'https://images.app.goo.gl/w1c4mQvg96ycmW4r8',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 26,
        url: 'https://images.app.goo.gl/rAhmsb3gsCK8ZWw88',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 26,
        url: 'https://images.app.goo.gl/t1S9gwNywYTVnbPx8',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 26,
        url: 'https://images.app.goo.gl/SeBoRAwVk9M4SSBh7',
        description: 'Yale',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 27,
        url: 'https://images.app.goo.gl/g4QA6LYyfqX6SmdM8',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 27,
        url: 'https://images.app.goo.gl/sjuznajBPTnBnjRB8',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 27,
        url: 'https://images.app.goo.gl/zfkM5uRpUmzoMkux8',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 27,
        url: 'https://images.app.goo.gl/TQVYjMoHjAZEqDjU8',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 27,
        url: 'https://images.app.goo.gl/YwdkW7abbMRPK8bx6',
        description: 'Chicago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 28,
        url: 'https://images.app.goo.gl/XS3MzGCv9jqkK5wW8',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 28,
        url: 'https://images.app.goo.gl/otP51oT9ZVkRcjo26',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 28,
        url: 'https://images.app.goo.gl/hgQcYthjJBWU4NXc8',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 28,
        url: 'https://images.app.goo.gl/s7DxNPQf1k3Fbsbu8',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 28,
        url: 'https://images.app.goo.gl/cLvt5imcXi7ds8Ma9',
        description: 'UPenn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 29,
        url: 'https://images.app.goo.gl/yLKZZNdbXYufJB3s8',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 29,
        url: 'https://images.app.goo.gl/pV2SHgcjH6juF1Rf7',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 29,
        url: 'https://images.app.goo.gl/gMGTk86ktb5rfe3y5',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 29,
        url: 'https://images.app.goo.gl/YqatKtiBD7BTF2WK6',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 29,
        url: 'https://images.app.goo.gl/mUM3DUvp77VEwxkS7',
        description: 'Duke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 30,
        url: 'https://images.app.goo.gl/jFyCEGMnk2ENygYe8',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 30,
        url: 'https://images.app.goo.gl/3855rJW5yFzjGuxQ6',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 30,
        url: 'https://images.app.goo.gl/552gCWdWsqWjGbNr8',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 30,
        url: 'https://images.app.goo.gl/SRB3VwZjpNfp7P8C9',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 30,
        url: 'https://images.app.goo.gl/bMQBeJEwxjAhd8Fg8',
        description: 'Arkansas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 31,
        url: 'https://images.app.goo.gl/AQTKqNGUmGqbbtre7',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 31,
        url: 'https://images.app.goo.gl/9fWbgw29JutQqmNr8',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 31,
        url: 'https://images.app.goo.gl/MsdqfaQiKT3NxHXU6',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 31,
        url: 'https://images.app.goo.gl/cCgxt5f2n2Aoj5ZW6',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 31,
        url: 'https://images.app.goo.gl/zczYHWdiqEEqyX9RA',
        description: 'UMich',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 32,
        url: 'https://images.app.goo.gl/XTNchd93YBQiJ1pk6',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 32,
        url: 'https://images.app.goo.gl/RaxD7CgXyDkoBuuw5',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 32,
        url: 'https://images.app.goo.gl/5XLAAY2uygwd64Fe7',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 32,
        url: 'https://images.app.goo.gl/7QMNnNUHZww9jy3L7',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 32,
        url: 'https://images.app.goo.gl/rmDMgjiQTaUA1Y9y9',
        description: 'UW',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 33,
        url: 'https://images.app.goo.gl/s9prX5ynxwyoMqom7',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 33,
        url: 'https://images.app.goo.gl/Afjo4k7itPKG7GRT9',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 33,
        url: 'https://images.app.goo.gl/oxnrMUJFqZPVKa4n9',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 33,
        url: 'https://images.app.goo.gl/rqdVd4CSVkaaHotk7',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 33,
        url: 'https://images.app.goo.gl/EkJ5bk5Qjkz9nFCdA',
        description: 'WWU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 34,
        url: 'https://images.app.goo.gl/x6MkEt7josqoZEJ76',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 34,
        url: 'https://images.app.goo.gl/1Qry74jvDygP5qJD8',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 34,
        url: 'https://images.app.goo.gl/wyHwQ4UH1WsmjG1r6',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 34,
        url: 'https://images.app.goo.gl/YfAhmqkHns1dVN2B9',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 34,
        url: 'https://images.app.goo.gl/fbjGNTTSxkhPs84w6',
        description: 'Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 35,
        url: 'https://images.app.goo.gl/Du911Fw5kbv7KasP8',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 35,
        url: 'https://images.app.goo.gl/dNK7JckfHjYcvCjN8',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 35,
        url: 'https://images.app.goo.gl/Z9QB61DdEmEhd9cq9',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 35,
        url: 'https://images.app.goo.gl/YepUNiHQFRspdamf8',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 35,
        url: 'https://images.app.goo.gl/cCUYDBdNTVcMnuzJ8',
        description: 'Boston College',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 36,
        url: 'https://images.app.goo.gl/1ihczbb4uzebhRS19',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 36,
        url: 'https://images.app.goo.gl/xxACGNuhiPRghTLt9',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 36,
        url: 'https://images.app.goo.gl/FXYG6RkSdXTifnKm8',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 36,
        url: 'https://images.app.goo.gl/34fgxevhoKQvM4j17',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 36,
        url: 'https://images.app.goo.gl/WBjq1kZnE6CuuaND9',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 37,
        url: 'https://images.app.goo.gl/dmtb7gFWNEVUTLPy5',
        description: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 37,
        url: 'https://images.app.goo.gl/xpLD9UUVnFzGXuqM9',
        description: 'Rice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 37,
        url: 'https://images.app.goo.gl/rCBHSrmzJpUytN4A8',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 37,
        url: 'https://images.app.goo.gl/L6wD6AckM6WoD3kg8',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 37,
        url: 'https://images.app.goo.gl/pZzGafwim67Byew78',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 38,
        url: 'https://images.app.goo.gl/iDnCtEnvfPwsZhE98',
        description: 'Georgetown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 38,
        url: 'https://images.app.goo.gl/M9iieu3rLfUFBP5m7',
        description: 'Georgetown',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 38,
        url: 'https://images.app.goo.gl/FEt7Y5Pz65yGoXxa6',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 38,
        url: 'https://images.app.goo.gl/TypKGufiUASPxqJAA',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 38,
        url: 'https://images.app.goo.gl/4c85SBXfYgsw7XnT8',
        description: 'UCLA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 39,
        url: 'https://images.app.goo.gl/W2bv4m2oTw7i17vC6',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 39,
        url: 'https://images.app.goo.gl/SMycCGfe57FN7dqi9',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 39,
        url: 'https://images.app.goo.gl/U8rx45FxFHRV6nJi6',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 39,
        url: 'https://images.app.goo.gl/e6xV1FzWaqmfe6A88',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 39,
        url: 'https://images.app.goo.gl/oH8WruzpUdGuZeXf6',
        description: 'UofL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 40,
        url: 'https://images.app.goo.gl/e8hJckwibEeR29kU6',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 40,
        url: 'https://images.app.goo.gl/h9pNmK1feZmaNZFV8',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 40,
        url: 'https://images.app.goo.gl/3kR7Wnr3f9vGpz5L7',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 40,
        url: 'https://images.app.goo.gl/RUsL4bmLq3jTW37Y7',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 40,
        url: 'https://images.app.goo.gl/ySCCVyuP8ah7Qf8v6',
        description: 'Florida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 41,
        url: 'https://images.app.goo.gl/nyA7HA3F2q99MrDA7',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 41,
        url: 'https://images.app.goo.gl/AQUZrDeZ4Dvyzxhf9',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 41,
        url: 'https://images.app.goo.gl/uiRPbqna97x4wrJA9',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 41,
        url: 'https://images.app.goo.gl/wcPjjPAg6qHfTEj16',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 41,
        url: 'https://images.app.goo.gl/MqZgA77HSbxE84SC7',
        description: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 42,
        url: 'https://images.app.goo.gl/Eya1Uwef8oSkXdcP8',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 42,
        url: 'https://images.app.goo.gl/LsNwbsEeHnJHdwRT8',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 42,
        url: 'https://images.app.goo.gl/y2CUSW8CkJ1Ntg7MA',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 42,
        url: 'https://images.app.goo.gl/vfAeFDTjNUbSqmMH7',
        description: 'A&M',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        campusId: 42,
        url: 'https://images.app.goo.gl/EzudqPia1DFkugbw5',
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
