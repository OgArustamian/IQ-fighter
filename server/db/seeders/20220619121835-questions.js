module.exports = {
  async up(queryInterface, Sequelize) {
    const questions = [
      {
        question: 'С воздушным шариком, какого цвета ходит клоун — злодей Пеннивайз в фильме «Оно»?', difficulty: 1, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как назывался культовый фильм С. Спилберга про акулу-людоеда гигантских размеров?', difficulty: 2, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Где были обнаружены останки инопланетного существа, уничтожающего землян и принимающего их облик в фильме «Нечто»?', difficulty: 3, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Временная память в компьютере.', difficulty: 4, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как расшифровывается аббревиатура BIOS?', difficulty: 4, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Соединение (физическое или логическое), через которое принимаются и отправляются данные в компьютере.', difficulty: 2, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Первая реплика во всей франшизе "Звездных войн" (IV эпизод) принадлежит именно ему?', difficulty: 4, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Гугл настолько любит этого персонажа, что не может адекватно воспринимать, когда его имя пишут неправильно', difficulty: 1, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'В 2000 году вышел байопик о Мухамеде Али. Кто его сыграл?', difficulty: 2, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Угадайте сериал по его персонажам: Джеймс МакГил, Ким Векслер, Начо Варга, Чарльз МакГил, Говард Хэмлин, Густаво Фринг, Майк Эрмантраут.', difficulty: 3, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'По одной из версий это изобрел заключенный Виктор Орвилл, когда хаотично писал символы на плиточном полу своей камеры', difficulty: 3, theme_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'В компьютере информация хранится в виде:', difficulty: 1, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Что вернёт данный код: console.log( false && 1 && [] )', difficulty: 1, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Что вернёт данный код: console.log( " " && true && 5 )', difficulty: 2, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как быстрее всего преобразовать строку в число?', difficulty: 4, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Что вернёт данный код: console.log( null || 1 || undefined )', difficulty: 2, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: `Что будет в консоли?
        function sayHi() {
          console.log(name);
          console.log(age);
          var name = "Lydia";
          let age = 21;
        }
        
        sayHi();
        `,
        difficulty: 4,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Что вернёт данный код: console.log( typeof null )', difficulty: 3, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Краткий пересказ какого фильмы вы видите: "Бывший мертвец организовывает группу по интересам"', difficulty: 3, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой актер озвучил фразу «Я есть Грут» на 15 различных языках?', difficulty: 1, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Questions', questions, {});
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
