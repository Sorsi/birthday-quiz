import { Question } from './types/question.interface';

export const data: Question[] = [
  {
    question:
      'Kezdjünk egy bemelegítő kérdéssel: add össze a születési dátumod számjegyeit mindaddig, míg 1 db számjegyet nem kapsz. Melyik az a számjegy?',
    incorrectAnswers: ['2', '6', '4'],
    correctAnswer: '3',
    type: 'choice',
  },
  {
    question: 'Melyik híresség született 1986-ban?',
    incorrectAnswers: ['Rihanna', 'Katy Perry', 'Beyonce'],
    correctAnswer: 'Lady Gaga',
    type: 'choice',
  },
  {
    question: 'Melyik dal volt a listavezető ezen a napon (1986.05.19)?',
    incorrectAnswers: [
      'Rod Stewart - Love Touch',
      'Pet Shop Boys - Opportunities',
      'Madonna - Live To Tell',
    ],
    correctAnswer: 'Whitney Houston - Greatest Love of All',
    type: 'choice',
  },
  {
    question: 'Melyik híres személy született május 19-én?',
    incorrectAnswers: ['Megan Fox', 'Robert Pattison', 'Drake'],
    correctAnswer: 'Andrea Pirlo',
    type: 'choice',
  },
  {
    question: 'Melyik film vezette a Box Office listát ezen a napon 86-ban?',
    incorrectAnswers: ['Vissza a jövőbe', 'Rocky IV', 'Amerikába jöttem'],
    correctAnswer: 'Top Gun',
    type: 'choice',
  },
  {
    question:
      'Ki volt az Egyesült Királyság miniszterelnöke születésed évében?',
    incorrectAnswers: ['Tony Blair', 'Theresa May', 'Boris Johnson'],
    correctAnswer: 'Margaret Thatcher',
    type: 'choice',
  },
  {
    question:
      'Ideiglenes otthonom mását még Macaulay Culkin hordta még 1990-ben...',
    correctAnswer: 'Home Alone',
    type: 'input',
  },
  {
    question:
      'Lakótársam, az Óriás folyton Haragban volt a világgal Édentől keletre...',
    correctAnswer: 'James Dean',
    type: 'input',
  },
  {
    question:
      'Ha anyagilag megszorulnál, nyugodtan térj be hozzám... De ne feledd: mindig adminisztrálj!',
    correctAnswer: 'h1K56lp',
    type: 'input',
  },
  {
    question:
      'Mostanában sokat panaszkodtál, hogy ideje korán ledobom a fehér bunám...',
    correctAnswer: 'bárány',
    type: 'input',
  },
  {
    question:
      'Nézz a darts táblára, jegyezd föl a szülihónapod száma mellett jobbra található számot. Plusz a szülinapod mellett balra lévőt. Add össze őket! Mit kapsz?',
    correctAnswer: '27',
    type: 'input',
  },
];
