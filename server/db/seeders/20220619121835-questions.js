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
        question: 'Как расшифровывается аббревиатура BIOS?', difficulty: 3, theme_id: 2, createdAt: new Date(), updatedAt: new Date(),
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
        question: 'Что вернёт данный код: console.log( false && 1 && [] )?', difficulty: 1, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Что вернёт данный код: console.log( " " && true && 5 )?', difficulty: 2, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Как быстрее всего преобразовать строку в число?', difficulty: 4, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Что вернёт данный код: console.log( null || 1 || undefined )?', difficulty: 2, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
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
        question: 'Что вернёт данный код: console.log( typeof null )?', difficulty: 3, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Краткий пересказ какого фильма вы видите: "Бывший мертвец организовывает группу по интересам"?', difficulty: 3, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: 'Какой актер озвучил фразу «Я есть Грут» на 15 различных языках?', difficulty: 1, theme_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: `Что будет в консоли?
        let number = 0;
        console.log(number++);
        console.log(++number);
        console.log(number);
        `,
        difficulty: 4,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Что будет в консоли?
        function getAge(...args) {
          console.log(typeof args);
        }
        
        getAge(21);
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Чему будет равно sum?
        const sum = eval("10*10+5");
        `,
        difficulty: 4,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Что будет в консоли?
        var num = 8;
        var num = 10;
        console.log(num);
        `,
        difficulty: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Что будет в консоли?
        for (let i = 1; i < 5; i++) {
          if (i === 3) continue;
          console.log(i);
        }
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какие из этих значений являются "ложными"?
        0;
        new Number(0);
        ("");
        (" ");
        new Boolean(false);
        undefined;
        `,
        difficulty: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Что будет в консоли: console.log(typeof typeof 1);', difficulty: 2, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: `Каким будет результат?
        (() => {
          let x = (y = 10);
        })();
        
        console.log(typeof x);
        console.log(typeof y);
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        // counter.js
        let counter = 10;
        export default counter;

        // index.js
        import myCounter from "./counter";

        myCounter += 1;

        console.log(myCounter);
        `,
        difficulty: 2,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        const set = new Set([1, 1, 2, 3, 4]);
        console.log(set);
        `,
        difficulty: 2,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        const name = "Lydia";
        age = 21;

        console.log(delete name);
        console.log(delete age);
        `,
        difficulty: 2,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        const numbers = [1, 2, 3, 4, 5];
        const [y] = numbers;

        console.log(y);
        `,
        difficulty: 2,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        const user = { name: "Lydia", age: 21 };
        const admin = { admin: true, ...user };

        console.log(admin);
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Что НЕ является валидным?
        const bird = {
          size: "small"
        };
        
        const mouse = {
          name: "Mickey",
          small: true
        };
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Что будет в консоли?
        let c = { greeting: "Hey!" };
        let d;

        d = c;
        c.greeting = "Hello";
        console.log(d.greeting);
        `,
        difficulty: 2,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Что будет в консоли?
        let a = 3;
        let b = new Number(3);
        let c = 3;
        
        console.log(a == b);
        console.log(a === b);
        console.log(b === c);
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Что будет в консоли?
        let greeting;
        greetign = {}; // Опечатка!
        console.log(greetign);
        `,
        difficulty: 2,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Что произойдет?
        function bark() {
          console.log("Woof!");
        }
        
        bark.animal = "dog";
        `,
        difficulty: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Все объекты имеют прототипы?', difficulty: 1, theme_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        question: `Каким будет результат?
        function sum(a, b) {
          return a + b;
        }
        
        sum(1, "2");
        `,
        difficulty: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Это чистая функция?
        function sum(a, b) {
          return a + b;
        }
        `,
        difficulty: 1,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        const { name: myName } = { name: "Lydia" };
        
        console.log(name);
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        const box = { x: 10, y: 20 };

        Object.freeze(box);

        const shape = box;
        shape.x = 100;
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        function addToList(item, list) {
          return list.push(item);
        }
        
        const result = addToList("apple", ["banana"]);
        console.log(result);
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Какой будет вывод?
        async function getData() {
          return await Promise.resolve("I made it!");
        }
        
        const data = getData();
        console.log(data);
        }
        
        const result = addToList("apple", ["banana"]);
        console.log(result);
        `,
        difficulty: 3,
        theme_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
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
