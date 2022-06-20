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
      {
        answer: '112', isTrue: false, question_id: 21, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '122', isTrue: false, question_id: 21, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '022', isTrue: true, question_id: 21, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '012', isTrue: false, question_id: 21, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'number', isTrue: false, question_id: 22, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'array', isTrue: false, question_id: 22, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'object', isTrue: true, question_id: 22, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'NaN', isTrue: false, question_id: 22, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '105', isTrue: true, question_id: 23, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"105"', isTrue: false, question_id: 23, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'TypeError', isTrue: false, question_id: 23, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"10*10+5"', isTrue: false, question_id: 23, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '8', isTrue: false, question_id: 24, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '10', isTrue: true, question_id: 24, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'SyntaxError', isTrue: false, question_id: 24, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'ReferenceError', isTrue: false, question_id: 24, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '12', isTrue: false, question_id: 25, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '123', isTrue: false, question_id: 25, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '124', isTrue: true, question_id: 25, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '134', isTrue: false, question_id: 25, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '0, "", undefined', isTrue: true, question_id: 26, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '0, new Number(0), "", new Boolean(false), undefined', isTrue: false, question_id: 26, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '0, "", new Boolean(false), undefined', isTrue: false, question_id: 26, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Все являются "ложными"', isTrue: false, question_id: 26, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"number"', isTrue: false, question_id: 27, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"string"', isTrue: true, question_id: 27, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"object"', isTrue: false, question_id: 27, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"undefined"', isTrue: false, question_id: 27, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"undefined", "number"', isTrue: true, question_id: 28, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"number", "number"', isTrue: false, question_id: 28, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"object", "number"', isTrue: false, question_id: 28, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"number", "undefined"', isTrue: false, question_id: 28, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '[1, 1, 2, 3, 4]', isTrue: false, question_id: 29, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '[1, 2, 3, 4]', isTrue: false, question_id: 29, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{1, 1, 2, 3, 4}', isTrue: false, question_id: 29, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{1, 2, 3, 4}', isTrue: true, question_id: 29, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '10', isTrue: false, question_id: 30, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '11', isTrue: false, question_id: 30, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Error', isTrue: true, question_id: 30, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'NaN', isTrue: false, question_id: 30, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'false, true', isTrue: true, question_id: 31, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '"Lydia", 21', isTrue: false, question_id: 31, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'true, true', isTrue: false, question_id: 31, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined, undefined', isTrue: false, question_id: 31, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '[[1, 2, 3, 4, 5]]', isTrue: false, question_id: 32, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '[1, 2, 3, 4, 5]', isTrue: false, question_id: 32, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '1', isTrue: true, question_id: 32, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '[1]', isTrue: false, question_id: 32, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{ admin: true, user: { name: "Lydia", age: 21 } }', isTrue: false, question_id: 33, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{ admin: true, name: "Lydia", age: 21 }', isTrue: true, question_id: 33, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{ admin: true, user: ["Lydia", 21] }', isTrue: true, question_id: 33, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{ admin: true }', isTrue: true, question_id: 33, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'mouse.bird.size', isTrue: true, question_id: 34, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'mouse[bird.size]', isTrue: false, question_id: 34, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'mouse[bird["size"]]', isTrue: false, question_id: 34, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Все варианты валидны', isTrue: false, question_id: 34, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Hello', isTrue: true, question_id: 35, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Hey!', isTrue: false, question_id: 35, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined', isTrue: false, question_id: 35, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'ReferenceError', isTrue: false, question_id: 35, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'true, false, true', isTrue: false, question_id: 36, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'false, false, true', isTrue: false, question_id: 36, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'true, false, false', isTrue: true, question_id: 36, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'false, false, true', isTrue: false, question_id: 36, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{}', isTrue: true, question_id: 37, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'ReferenceError: greetign is not defined', isTrue: false, question_id: 37, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined', isTrue: false, question_id: 37, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'TypeError', isTrue: false, question_id: 37, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Ничего, всё в порядке!', isTrue: true, question_id: 38, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'SyntaxError', isTrue: false, question_id: 38, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined', isTrue: false, question_id: 38, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'ReferenceError', isTrue: false, question_id: 38, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Да', isTrue: false, question_id: 39, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Нет', isTrue: true, question_id: 39, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Повторите еще раз', isTrue: false, question_id: 39, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Это точно про JS?', isTrue: false, question_id: 39, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'NaN', isTrue: false, question_id: 40, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'TypeError', isTrue: false, question_id: 40, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '12', isTrue: true, question_id: 40, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '3', isTrue: false, question_id: 40, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Да', isTrue: true, question_id: 41, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Нет', isTrue: false, question_id: 41, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Возможно', isTrue: false, question_id: 41, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Я бы почистил', isTrue: false, question_id: 41, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Lydia', isTrue: false, question_id: 42, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'myName', isTrue: false, question_id: 42, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined', isTrue: false, question_id: 42, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'ReferenceError', isTrue: true, question_id: 42, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{ x: 100, y: 20 }', isTrue: false, question_id: 43, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{ x: 10, y: 20 }', isTrue: true, question_id: 43, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '{ x: 100 }', isTrue: false, question_id: 43, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'ReferenceError', isTrue: false, question_id: 43, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '["apple", "banana"]', isTrue: false, question_id: 44, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: '2', isTrue: true, question_id: 44, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'true', isTrue: false, question_id: 44, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined', isTrue: false, question_id: 44, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'I made it!', isTrue: false, question_id: 45, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Promise {<resolved>: "I made it!"}', isTrue: false, question_id: 45, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'Promise {<pending>}', isTrue: true, question_id: 45, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        answer: 'undefined', isTrue: false, question_id: 45, createdAt: new Date(), updatedAt: new Date(),
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
