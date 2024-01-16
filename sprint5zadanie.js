// // ZAD 1 //

// Dane wejściowe //
const people = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
  },
];

// Napisz funkcję, która przetwarza każdą osobę w tablicy people w następujący sposób:
// a) Dla każdego imienia, weź ostatnie 3 litery, odwróć ich kolejność i zapisz do zmiennej.
// b) Dla każdego nazwiska, weź pierwsze 3 litery, zamień miejscami pierwszą i ostatnią literę, i dołącz do zmiennej utworzonej w punkcie a).
// c) Zmień wielkość liter w taki sposób, aby ostateczny pseudonim (nickname) zaczynał się wielką literą, a reszta liter była mała.
// d) Jeśli liczba znaków w imieniu lub nazwisku jest mniejsza niż 2, pseudonim będzie odpowiednio krótszy.

function nickname(array) {
  return array.map(function (person) {
    const reversedLastThreeLettersName = person.firstName
      .slice(-3)
      .split(``)
      .reverse()
      .join(``);
    const reversedFirstThreeLettersLastName = person.lastName
      .slice(0, 3)
      .split(``)
      .reverse()
      .join(``);
    const combinedLetters =
      reversedLastThreeLettersName + reversedFirstThreeLettersLastName;
    const nick =
      combinedLetters.slice(0, 1).toUpperCase() +
      combinedLetters.toLowerCase().slice(1);
    return {
      firstName: person.firstName,
      lastName: person.lastName,
      nickname: nick,
    };
  });
}
const peopleWithNick = nickname(people);

// // ZAD 2 //

// Dane wejściowe
// const people = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok"
//   },
//   {
//     firstName: "Jan",
//     lastName: "Nowak",
//     nickname:"Najwon",
//   },
//   {
//     firstName: "Halina",
//     lastName: "Malina",
//     nickname:"Anilam",
//   }
// ];

// Rozszerz funkcję z poprzedniego zadania:
// Dodaj pole age, które jest wyliczane na podstawie sumy liter w imieniu i nazwisku. Jeżeli ilość liter w imieniu i
// nazwisku jest parzysta to wiek będzie będzie wyliczany, na postawie długości kluczy znajdujących się w obiekcie pomniejszone o długość imienia.

function addAge(array) {
  return array.map(function (person) {
    let personAge = person.firstName.length + person.lastName.length;
    if (personAge % 2 === 0) {
      personAge =
        Object.keys(person).reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.length;
        }, 0) - person.firstName.length;
    }

    return {
      firstName: person.firstName,
      lastName: person.lastName,
      nickname: person.nickname,
      age: personAge,
    };
  });
}

const peopleWithNickAndAge = addAge(peopleWithNick);

// // Zad 3 //

// Dane Wejściowe
// const people = [
//   {
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok"
//     age:19
//   },
//   {
//     firstName: "Jan",
//     lastName: "Nowak",
//     nickname:"Najwon",
//     age:22
//   },
//   {
//     firstName: "Waldemar",
//     lastName: "Malina",
//     nickname:"Ramlam",
//     age:17
//   }
// ];

//     a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
//     Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
//     "Cześć jestem Alicja Kowalska, ale w szkole mówią na mnie [Ajcwok]."
//     b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
//     pojawić się tekst powitalny dla każdej osoby w tablicy

peopleWithNickAndAge.forEach(function (person) {
  person.introduceYourself = function () {
    console.log(
      `Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]`
    );
  };
});

peopleWithNickAndAge.forEach(function (person) {
  person.introduceYourself();
});

// ZAD 4.

//  // Dane wejściowe //
//  [{
//     firstName: "Alicja",
//     lastName: "Kowalska",
//     nickname: "Ajcwok",
//     age:19,
//     introduceYourself: // funkcja //
//     }
//     itd ... ]

// const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

// Napisz funkcję, która :
//     a) przyjmie parametr typu number z zakresu 1 - 30
//     b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
//     c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
//         - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
//         - podałeś za dużą liczbę, liczba nie może być większa niż 30
//     d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
//     e) funkcja powinna zsumować pary klucz + wartość trzech pierwszych pozycji w obiekcie (użyj do tego Object.entries)
//     odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
//     wyznaczyć index
//     f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
// ​
//     Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
//     (45 - 5) % 6 = 4
//     console.log(colors[4]) //pink
// ​
//     Hints
//     - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math,
//     Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

function showColor(number = 5) {
  if (number < 1) {
    console.log(`Podałęś za małą liczbę, liczba nie moze być mniejsza niz 1`);
  } else if (number > 30) {
    console.log("Podałeś za duzą liczbę, liczba nie moze być większa niz 30");
  } else {
    const first3Keys = Object.entries(peopleWithNickAndAge[0]).slice(0, 3);
    const sumFirst3Keys = first3Keys.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + (currentValue[0].length + currentValue[1].length);
    },
    0);
    const result = (sumFirst3Keys - number) % colors.length;
    console.log(colors[Math.abs(result)]);
  }
}

showColor();
