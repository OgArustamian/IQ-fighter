module.exports = {
  async up(queryInterface, Sequelize) {
    const answers = [
      {
        answer: 'желтый', isTrue: false, question_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'красный', isTrue: true, question_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'синий', isTrue: false, question_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'фиолетовый', isTrue: false, question_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Акула Юрского периода', isTrue: false, question_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Глубокое синее море', isTrue: false, question_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Челюсти', isTrue: true, question_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Мегалодон', isTrue: false, question_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Норвегия', isTrue: false, question_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Гренландия', isTrue: false, question_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Антарктида', isTrue: true, question_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Сибирь', isTrue: false, question_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'оперативная память', isTrue: false, question_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'виртуальная память', isTrue: false, question_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'стек', isTrue: true, question_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'буферная память', isTrue: false, question_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Base-Input-Output-System', isTrue: true, question_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Basic-Information-of-Operating-System', isTrue: false, question_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Base-Engineered-Output-System', isTrue: false, question_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Built-In-Overlocking-System', isTrue: false, question_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'HTTP-протокол', isTrue: false, question_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'порт', isTrue: true, question_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'TCP-протокол', isTrue: false, question_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'сокет', isTrue: false, question_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Оби-ван Кеноби', isTrue: false, question_id: 7, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'R2-D2', isTrue: false, question_id: 7, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'C3PO', isTrue: true, question_id: 7, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'принцесса Лея Органа', isTrue: false, question_id: 7, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Сергей Брин', isTrue: false, question_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Оби-ван Кеноби', isTrue: false, question_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Скрудж Макдак', isTrue: false, question_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Джек Воробей', isTrue: true, question_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Дензел Вашингтон', isTrue: false, question_id: 9, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Джейми Фокс', isTrue: false, question_id: 9, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Уилл Смит', isTrue: true, question_id: 9, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Махершала Али', isTrue: false, question_id: 9, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Во все тяжкие', isTrue: false, question_id: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Лучше звоните Солу', isTrue: true, question_id: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Нарко', isTrue: false, question_id: 10, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'От заката до рассвета (сериал)', isTrue: false, question_id: 10, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Букварь', isTrue: false, question_id: 11, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Шрифты', isTrue: false, question_id: 11, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Судоку', isTrue: false, question_id: 11, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Кроссворд', isTrue: true, question_id: 11, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Чисел', isTrue: false, question_id: 12, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Единиц и нулей', isTrue: true, question_id: 12, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Кода', isTrue: false, question_id: 12, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'тестов', isTrue: false, question_id: 12, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'false', isTrue: true, question_id: 13, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '1', isTrue: false, question_id: 13, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '[]', isTrue: false, question_id: 13, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'true', isTrue: false, question_id: 13, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: '" "', isTrue: false, question_id: 14, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'true', isTrue: false, question_id: 14, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '5', isTrue: true, question_id: 14, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'false', isTrue: false, question_id: 14, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'функция Number()', isTrue: false, question_id: 15, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'метод parseInt()', isTrue: false, question_id: 15, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'умножить строку на число 1', isTrue: false, question_id: 15, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'унарный оператор "+"', isTrue: true, question_id: 15, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'null', isTrue: false, question_id: 16, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '1', isTrue: true, question_id: 16, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined', isTrue: false, question_id: 16, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'true', isTrue: false, question_id: 16, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Lydia и undefined', isTrue: false, question_id: 17, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Lydia и ReferenceError', isTrue: false, question_id: 17, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'ReferenceError и 21', isTrue: false, question_id: 17, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined и ReferenceError', isTrue: true, question_id: 17, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'null', isTrue: false, question_id: 18, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'object', isTrue: true, question_id: 18, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'number', isTrue: false, question_id: 18, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'symbol', isTrue: false, question_id: 18, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Воскрешение', isTrue: false, question_id: 19, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Вечность', isTrue: false, question_id: 19, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Агенты ЩИТ', isTrue: true, question_id: 19, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Проповедник', isTrue: false, question_id: 19, createdAt: new Date(), updatedAt: new Date(),
      },

      {
        answer: 'Гарегин', isTrue: false, question_id: 20, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Вин Дизель', isTrue: true, question_id: 20, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Арнольд Шварценеггер', isTrue: false, question_id: 20, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Джейсон Стэтхэм', isTrue: false, question_id: 20, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Answers', answers, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
