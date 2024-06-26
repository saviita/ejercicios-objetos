//EJERCICIOS

//EJ1 Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."
const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};
console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años. Me gusta ${user.hobbies[0]}, ${user.hobbies[1]} y ${user.hobbies[2]}. Tengo un ${user.pets[0].type} que se llama ${user.pets[0].name} y un ${user.pets[1].type} que se llama ${user.pets[1].name}. Vivo en ${user.address.street}, en ${user.address.city}(${user.address.state}), con código postal ${user.address.postalCode}, ${user.address.country}. Mi número es ${user.phone} y mi correo ${user.email}. Soy ${user.occupation} y estudié un ${user.education}`
);

//EJ2 Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

const getFiveArrays = () => {
  const data = {
    numbers: [10, 32, 31, 67, 9, 2, 51, 4],
    firstFloor: {
      secondFloor: {
        numbersPlus2: []
      },
      thirdFloor: {
        numbersDouble: []
      }
    },
    fourthFloor: {
      numbersDividedBy2: []
    },
    fifthFloor: {
      onlyEven: [],
      onlyOdd: []
    }
  };

  for (const number of data.numbers) {
    data.firstFloor.secondFloor.numbersPlus2.push(number + 2);
    data.firstFloor.thirdFloor.numbersDouble.push(number * 2);
    data.fourthFloor.numbersDividedBy2.push(number / 2);

    if (number % 2 === 0) {
      data.fifthFloor.onlyEven.push(number);
    } else {
      data.fifthFloor.onlyOdd.push(number);
    }
  }

  console.log(
    data.firstFloor.secondFloor.numbersPlus2,
    data.firstFloor.thirdFloor.numbersDouble,
    data.fourthFloor.numbersDividedBy2,
    data.fifthFloor.onlyEven,
    data.fifthFloor.onlyOdd
  );
};
getFiveArrays();

//EJ3 Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Victor", y rellena el objeto con valores que te pide. Revisa la documentación de los strings si hay algo que no sabes obtener.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
const getPhrase = phrase => {
  const data = {
    firstFloor: {
      vowels: []
    },
    secondFloor: {
      constants: []
    },

    fourthFloor: {
      asciiCode: []
    },
    fifthFloor: {
      //Cada palabra de la frase será una posición del array
      wordsInUppercase: [],
      wordsInLowercase: []
    },
    sixthFloor: {
      // En este nivel codificarás la frase para que sea un secreto.
      // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
      // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
      // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
      secretCode: ''
    }
  };
  const vowels = 'aeiouAEIOUáéíóúÁÉÍÓÚ';

  for (const letter of phrase) {
    if (vowels.includes(letter)) {
      data.firstFloor.vowels.push(letter);
    } else if (letter !== ' ') {
      data.secondFloor.constants.push(letter);
    }

    data.fourthFloor.asciiCode.push(letter.charCodeAt());
  }

  data.fifthFloor.wordsInUppercase = phrase.toUpperCase().split(' ');
  data.fifthFloor.wordsInLowercase = phrase.toLowerCase().split(' ');

  const consonants = 'bcdfghjklmnñpqrstvwxyz';
  let secretCode = '';
  for (const letter of phrase.toLowerCase()) {
    if (letter === 'a' || letter === 'á') {
      secretCode += 1;
    } else if (letter === 'e' || letter === 'é') {
      secretCode += 2;
    } else if (letter === 'i' || letter === 'í') {
      secretCode += 3;
    } else if (letter === 'o' || letter === 'o') {
      secretCode += 4;
    } else if (letter === 'u' || letter === 'ú') {
      secretCode += 5;
    } else if (consonants.includes(letter)) {
      if (letter === 'b') {
        secretCode += z;
      } else {
        const position = consonants.indexOf(letter) - 1;
        secretCode += consonants.charAt(position);
      }
    } else if (letter === ' ') {
      const randomPosition = Math.floor(Math.random);
    }
  }

  console.log(
    data.firstFloor.vowels,
    data.secondFloor.constants,
    data.fourthFloor.asciiCode,
    data.fifthFloor.wordsInLowercase,
    data.fifthFloor.wordsInUppercase
  );

  console.log(secretCode);
};
getPhrase('Si no estudias acabarás como Victor');
