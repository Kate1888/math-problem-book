import image7_1 from "./questionImages/image7_1.png";
import image7_2 from "./questionImages/image7_2.png";
import image7_3 from "./questionImages/image7_3.png";
import image8_1 from "./questionImages/image8_1.png";
import image8_2 from "./questionImages/image8_2.png";
import image8_4 from "./questionImages/image8_4.png";
import image9_1 from "./questionImages/image9_1.png";
import image9_2 from "./questionImages/image9_2.png";
import image9_3 from "./questionImages/image9_3.png";
import image13_4 from "./questionImages/image13_4.png";
import image18_1 from "./questionImages/image18_1.png";
import image18_2 from "./questionImages/image18_2.png";
import image18_3 from "./questionImages/image18_3.png";
import image20_1 from "./questionImages/image20_1.png";
import image21_1 from "./questionImages/image21_1.png";
import image21_2 from "./questionImages/image21_2.png";
import image23_1 from "./questionImages/image23_1.png";
import image24_1 from "./questionImages/image24_1.png";
import image24_2 from "./questionImages/image24_2.png";
import image24_3 from "./questionImages/image24_3.png";
export default function getIndividualWorkQuestions(workNumber) {
    let questionsByWork = {
        1: [
            {
                order: 1,
                text: 'Округлите число 6574 до десятых, выберите верный ответ.',
                image: null,
                answers: [
                    {
                        text: '6580',
                        isRight: false,
                    },
                    {
                        text: '6570',
                        isRight: true,
                    },
                    {
                        text: '6600',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Округлите число 3482 до сотен, выберите верный ответ.',
                image: null,
                answers: [
                    {
                        text: '3400',
                        isRight: false,
                    },
                    {
                        text: '3490',
                        isRight: false,
                    },
                    {
                        text: '3500',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Округлите число 12545 до тысяч, выберите верный ответ.',
                image: null,
                answers: [
                    {
                        text: '13000',
                        isRight: true,
                    },
                    {
                        text: '12000',
                        isRight: false,
                    },
                    {
                        text: '12550',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Упростите выражение 66 + (a + 102), выберите верный ответ.',
                image: null,
                answers: [
                    {
                        text: '66a + 102',
                        isRight: false,
                    },
                    {
                        text: 'a + 168',
                        isRight: true,
                    },
                    {
                        text: '66 + a + 102',
                        isRight: false,
                    }
                ],
            },
            {
                order: 5,
                text: 'Упростите выражение 34 - (b + 17), выберите верный ответ.',
                image: null,
                answers: [
                    {
                        text: '51 - b',
                        isRight: false,
                    },
                    {
                        text: '17 - b ',
                        isRight: true,
                    },
                    {
                        text: '34 - b',
                        isRight: false,
                    }
                ],
            },
            {
                order: 6,
                text: 'Найдите частное 450 : 75, выберите верный ответ.',
                image: null,
                answers: [
                    {
                        text: '8',
                        isRight: false,
                    },
                    {
                        text: '4 ',
                        isRight: false,
                    },
                    {
                        text: '6',
                        isRight: true,
                    }
                ],
            },
            {
                order: 7,
                text: 'Найдите частное 744 : 62, выберите верный ответ.',
                image: null,
                answers: [
                    {
                        text: '12',
                        isRight: true,
                    },
                    {
                        text: '14',
                        isRight: false,
                    },
                    {
                        text: '9',
                        isRight: false,
                    }
                ],
            }
        ],
        2: [
            {
                order: 1,
                text: 'Выберите числовое выражения.',
                image: null,
                answers: [
                    {
                        text: ' 546 + 86 + 67a',
                        isRight: false,
                    },
                    {
                        text: ' 56a - 67b',
                        isRight: false,
                    },
                    {
                        text: ' 67 - 11 + 655',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Выберите буквенное выражение.',
                image: null,
                answers: [
                    {
                        text: ' 45 : 5 + 89',
                        isRight: false,
                    },
                    {
                        text: '56a + 67b - 89',
                        isRight: true,
                    },
                    {
                        text: '67 + 56',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите значение выражения y : 27 + 33, если y = 729, выберите верный ответ.',
                image: null,
                answers: [
                    {
                        text: '60',
                        isRight: true,
                    },
                    {
                        text: '53',
                        isRight: false,
                    },
                    {
                        text: '65',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите корень уравнения (3x + 5) : 8 = 13.',
                image: null,
                answers: [
                    {
                        text: '36',
                        isRight: false,
                    },
                    {
                        text: '33',
                        isRight: true,
                    },
                    {
                        text: '2',
                        isRight: false,
                    }
                ],
            }
        ],
        3: [
            {
                order: 1,
                text: 'Какое число делиться на 3',
                image: null,
                answers: [
                    {
                        text: '13299',
                        isRight: true,
                    },
                    {
                        text: '7569',
                        isRight: false,
                    },
                    {
                        text: '419',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'На какую цифру делиться число 76486 нацело.',
                image: null,
                answers: [
                    {
                        text: '3',
                        isRight: false,
                    },
                    {
                        text: '2',
                        isRight: true,
                    },
                    {
                        text: '9',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Какую цифру нужно поставить вместо * чтобы чтсло 54*54 делилось на 9',
                image: null,
                answers: [
                    {
                        text: '2',
                        isRight: false,
                    },
                    {
                        text: '6',
                        isRight: false,
                    },
                    {
                        text: '9',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'Какое число делиться на 10',
                image: null,
                answers: [
                    {
                        text: '43500',
                        isRight: true,
                    },
                    {
                        text: '5454',
                        isRight: false,
                    },
                    {
                        text: '1232',
                        isRight: false,
                    }
                ],
            },
            {
                order: 5,
                text: 'На какую цифру делиться число 545735',
                image: null,
                answers: [
                    {
                        text: '9',
                        isRight: false,
                    },
                    {
                        text: '5',
                        isRight: true,
                    },
                    {
                        text: '2',
                        isRight: false,
                    }
                ],
            }
        ],
        4: [
            {
                order: 1,
                text: 'Разложите число 800 на простые множители',
                image: null,
                answers: [
                    {
                        text: '2×2×2×5×5',
                        isRight: false,
                    },
                    {
                        text: '2×2×2×2×2×5×5;',
                        isRight: true,
                    },
                    {
                        text: '8×2×2×5×5;',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Разложите число 360 на простые множители',
                image: null,
                answers: [
                    {
                        text: ' 2<sup>2</sup> &#215; 3<sup>3</sup> &#215; 5',
                        isRight: false,
                    },
                    {
                        text: '2<sup>3</sup> &#215; 3<sup>2</sup> &#215; 5',
                        isRight: true,
                    },
                    {
                        text: '4<sup>4</sup> &#215; 3<sup>2</sup> &#215; 5',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Число разложите на простые множители и получили 2<sup>4</sup> &#215; 3 &#215; 5<sup>2</sup>  , какое число раздожили?',
                image: null,
                answers: [
                    {
                        text: '1200',
                        isRight: true,
                    },
                    {
                        text: '240',
                        isRight: false,
                    },
                    {
                        text: '60',
                        isRight: false,
                    }
                ],
            }
        ],
        5: [
            {
                order: 1,
                text: ' Найдите НОД чисел 360 и 252',
                image: null,
                answers: [
                    {
                        text: '38',
                        isRight: false,
                    },
                    {
                        text: '36',
                        isRight: true,
                    },
                    {
                        text: '35',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите НОД чисел a = 2<sup>3</sup> &#215; 3 <sup>2</sup> &#215; 5 &#215; 7<sup>2</sup> и b = 2<sup>5</sup> &#215; 3 <sup>4</sup> &#215; 5 <sup>2</sup> &#215; 7.',
                image: null,
                answers: [
                    {
                        text: ' 2555',
                        isRight: false,
                    },
                    {
                        text: '2530',
                        isRight: false,
                    },
                    {
                        text: '2520',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите НОД(1800;1500;420).',
                image: null,
                answers: [
                    {
                        text: '300',
                        isRight: true,
                    },
                    {
                        text: '6',
                        isRight: false,
                    },
                    {
                        text: '3',
                        isRight: false,
                    }
                ],
            }
        ],
        6: [
            {
                order: 1,
                text: 'Найдите НОК чисел 45 и 25',
                image: null,
                answers: [
                    {
                        text: '1125',
                        isRight: false,
                    },
                    {
                        text: '225',
                        isRight: true,
                    },
                    {
                        text: '5',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите НОК чисел a = 2<sup>3</sup> &#215; 3 <sup>2</sup> &#215; 5 &#215; 7 и b = 2 &#215; 3 <sup>3</sup> &#215; 5 <sup>2</sup>.',
                image: null,
                answers: [
                    {
                        text: '37800',
                        isRight: true,
                    },
                    {
                        text: '9000',
                        isRight: false,
                    },
                    {
                        text: '8000',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите НОК(42;144;182)',
                image: null,
                answers: [
                    {
                        text: '41328',
                        isRight: true,
                    },
                    {
                        text: '41330',
                        isRight: false,
                    },
                    {
                        text: '41400',
                        isRight: false,
                    }
                ],
            }
        ],
        7: [
            {
                order: 1,
                text: 'Выберите вид труегольника',
                image: image7_1,
                answers: [
                    {
                        text: 'остроугольный',
                        isRight: false,
                    },
                    {
                        text: 'прямоугольный',
                        isRight: false,
                    },
                    {
                        text: 'тупоугольный',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите площадь квадрата со стороной 16',
                image: null,
                answers: [
                    {
                        text: '256',
                        isRight: true ,
                    },
                    {
                        text: '32',
                        isRight: false,
                    },
                    {
                        text: '64',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите угол ABD',
                image: image7_2,
                answers: [
                    {
                        text: '21',
                        isRight: false,
                    },
                    {
                        text: '55',
                        isRight: true,
                    },
                    {
                        text: '115',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите периметр',
                image: image7_3,
                answers: [
                    {
                        text: '96',
                        isRight: false,
                    },
                    {
                        text: '100',
                        isRight: false,
                    },
                    {
                        text: '101',
                        isRight: true,
                    }
                ],
            }
        ],
        8: [
            {
                order: 1,
                text: 'Отрезок DE, является',
                image: image8_1,
                answers: [
                    {
                        text: 'диаметром',
                        isRight: false,
                    },
                    {
                        text: 'хордой',
                        isRight: true,
                    },
                    {
                        text: 'радиусом',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Как называется данная пирамида',
                image: image8_2,
                answers: [
                    {
                        text: 'пятиугольная',
                        isRight:  false,
                    },
                    {
                        text: 'семиугольная',
                        isRight: false,
                    },
                    {
                        text: 'шестиугольная',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите объём куба со стороной 6',
                image: null,
                answers: [
                    {
                        text: '18',
                        isRight: false,
                    },
                    {
                        text: '216',
                        isRight: true,
                    },
                    {
                        text: '42',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите грань равную грани ABCD',
                image: image8_4,
                answers: [
                    {
                        text: 'CC1D1D',
                        isRight: false,
                    },
                    {
                        text: 'AA1B1B',
                        isRight: false,
                    },
                    {
                        text: 'A1B1C1D1',
                        isRight: true,
                    }
                ],
            }
        ],
        9: [
            {
                order: 1,
                text: 'Какие являются дроби',
                image: image9_1,
                answers: [
                    {
                        text: 'неправильными',
                        isRight: false,
                    },
                    {
                        text: 'правильными',
                        isRight: true,
                    },
                    {
                        text: 'смешанными',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Решите пример',
                image: image9_2,
                answers: [
                    {
                        text: '3',
                        isRight:  false,
                    },
                    {
                        text: '15',
                        isRight: true,
                    },
                    {
                        text: '12',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Решите пример',
                image: image9_3,
                answers: [
                    {
                        text: '9',
                        isRight: false,
                    },
                    {
                        text: '7',
                        isRight: true,
                    },
                    {
                        text: '12',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите 4/5 от числа 120',
                image: null,
                answers: [
                    {
                        text: '32',
                        isRight: true,
                    },
                    {
                        text: '150',
                        isRight: false,
                    },
                    {
                        text: '8',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите число, 4/13 которого равно 13',
                image: null,
                answers: [
                    {
                        text: '104',
                        isRight: false,
                    },
                    {
                        text: '5',
                        isRight: false,
                    },
                    {
                        text: '52',
                        isRight: true,
                    }
                ],
            }
        ],
        10: [
            {
                order: 1,
                text: 'Какой знак нужно поставить между числами 65,5664 и 65,5604',
                image: null,
                answers: [
                    {
                        text: '>',
                        isRight: true,
                    },
                    {
                        text: '<',
                        isRight: false,
                    },
                    {
                        text: '=',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Выберите правильное округление до сотых числа 77,8754',
                image: null,
                answers: [
                    {
                        text: '77,875',
                        isRight:  false,
                    },
                    {
                        text: '77,88',
                        isRight: true,
                    },
                    {
                        text: '77,87',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Решите пример (5,4 + 2,3) х 2,1 : 0,3',
                image: null,
                answers: [
                    {
                        text: '21,5',
                        isRight: false,
                    },
                    {
                        text: '53,9',
                        isRight: true,
                    },
                    {
                        text: '53,09',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Решите пример 12,4 х 1,6 + 1,2 х 2,3 - 5,1',
                image: null,
                answers: [
                    {
                        text: '17,5',
                        isRight: true,
                    },
                    {
                        text: '43,292',
                        isRight: false,
                    },
                    {
                        text: '28,856',
                        isRight: false,
                    }
                ],
            },
        ],
        11: [
            {
                order: 1,
                text: 'Преобразуйте в десятичную дробь 27/50',
                image: null,
                answers: [
                    {
                        text: '0,054',
                        isRight: false,
                    },
                    {
                        text: '0,54',
                        isRight: true,
                    },
                    {
                        text: '5,4',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите десятичное приближение дроби 14/75 до сотых',
                image: null,
                answers: [
                    {
                        text: '0,19',
                        isRight:  true,
                    },
                    {
                        text: '0,18',
                        isRight: false,
                    },
                    {
                        text: '0,187',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Преобразуйте в десятичную дробь 62/25',
                image: null,
                answers: [
                    {
                        text: '2,5',
                        isRight: false,
                    },
                    {
                        text: '2,48',
                        isRight: true,
                    },
                    {
                        text: '2,05',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите десятичное приближение дроби 37/41 до тысячных',
                image: null,
                answers: [
                    {
                        text: '0,912',
                        isRight: false,
                    },
                    {
                        text: '0,902',
                        isRight: true,
                    },
                    {
                        text: '0,903',
                        isRight: false,
                    }
                ],
            },
        ],
        12: [
            {
                order: 1,
                text: 'Найдите среднее арифметическое чисел: 4,5; 2,1 и 2,4',
                image: null,
                answers: [
                    {
                        text: '5',
                        isRight: false,
                    },
                    {
                        text: '2',
                        isRight: false,
                    },
                    {
                        text: '3',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Среднее арифметическое чисел 12,4 и х равно 7,6. Найдите х',
                image: null,
                answers: [
                    {
                        text: '2,8',
                        isRight:  true,
                    },
                    {
                        text: '8,6',
                        isRight: false,
                    },
                    {
                        text: '3',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'В течении пяти дней в 10 ч утра Марина выписывала количество выпадения осадков. Она получила такие результаты: 30м; 12м; 3м; 10м; 11м. Найдите среднее значение проведённых измерений.   ',
                image: null,
                answers: [
                    {
                        text: '13,5',
                        isRight: false,
                    },
                    {
                        text: '13,2',
                        isRight: true,
                    },
                    {
                        text: '13,1',
                        isRight: false,
                    }
                ],
            },
        ],
        13: [
            {
                order: 1,
                text: 'Представьте в виде десятичной дроби 8%',
                image: null,
                answers: [
                    {
                        text: '0,08',
                        isRight: true,
                    },
                    {
                        text: '0,8',
                        isRight: false,
                    },
                    {
                        text: '8',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Представьте в виде процентов 0,76',
                image: null,
                answers: [
                    {
                        text: '7,6%',
                        isRight: false,
                    },
                    {
                        text: '76%',
                        isRight: true,
                    },
                    {
                        text: '0,0076%',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите 7% от числа 8',
                image: null,
                answers: [
                    {
                        text: '0,56',
                        isRight: true,
                    },
                    {
                        text: '56',
                        isRight: false,
                    },
                    {
                        text: '0,056',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите сколько процентов площади квадрата закрашено',
                image: image13_4,
                answers: [
                    {
                        text: '36%',
                        isRight: true,
                    },
                    {
                        text: '30%',
                        isRight: false,
                    },
                    {
                        text: '3%',
                        isRight: false,
                    }
                ],
            },
        ],
        14: [
            {
                order: 1,
                text: 'Найдите число, 10% которого равны 56',
                image: null,
                answers: [
                    {
                        text: '5,6',
                        isRight: false,
                    },
                    {
                        text: '560',
                        isRight: true,
                    },
                    {
                        text: '0,56',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите число, 16% которого равны 40',
                image: null,
                answers: [
                    {
                        text: '250',
                        isRight: true,
                    },
                    {
                        text: '6,4',
                        isRight: false,
                    },
                    {
                        text: '300',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите число, 12% которого равны 36',
                image: null,
                answers: [
                    {
                        text: '300',
                        isRight: true,
                    },
                    {
                        text: '354',
                        isRight: false,
                    },
                    {
                        text: '43,2',
                        isRight: false,
                    }
                ],
            },
        ],
        15: [
            {
                order: 1,
                text: 'Чему равно отношение числа 36 к 6',
                image: null,
                answers: [
                    {
                        text: '6',
                        isRight: true,
                    },
                    {
                        text: '1/6',
                        isRight: false,
                    },
                    {
                        text: '216',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите отношение 5дм : 5см',
                image: null,
                answers: [
                    {
                        text: '10',
                        isRight: true,
                    },
                    {
                        text: '1',
                        isRight: false,
                    },
                    {
                        text: '0,1',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Что показывает отношение чисел a и b',
                image: null,
                answers: [
                    {
                        text: 'показывает, во сколько раз число b больше числа a',
                        isRight: false,
                    },
                    {
                        text: 'покузывает какую часть число b составляет от числа a',
                        isRight: false,
                    },
                    {
                        text: 'покузывает какую часть число a составляет от числа b',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'Расстояние на карте между двумя городами равно 6,9см. Какое расстояние между этими городами на местности, если масштаб карты равен 1 : 600000',
                image: null,
                answers: [
                    {
                        text: '41400км',
                        isRight: false,
                    },
                    {
                        text: '414км',
                        isRight: true,
                    },
                    {
                        text: '40000км',
                        isRight: false,
                    }
                ],
            },
        ],
        16: [
            {
                order: 1,
                text: 'Выберите крайние члены пропорции 45 : 5 = 18 : 2',
                image: null,
                answers: [
                    {
                        text: '5 и 2',
                        isRight: false,
                    },
                    {
                        text: '45 и 2 ',
                        isRight: true,
                    },
                    {
                        text: '45 и 18',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Из каких отношений можно составить пропорцию ',
                image: null,
                answers: [
                    {
                        text: '36 : 6 = 12 : 6',
                        isRight: false,
                    },
                    {
                        text: '9 : 3 = 21 : 3 ',
                        isRight: false,
                    },
                    {
                        text: '25 : 5 = 50 : 10',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите неизвестный член пропорции х : 7 = 72 : 12',
                image: null,
                answers: [
                    {
                        text: '23',
                        isRight: false,
                    },
                    {
                        text: '72',
                        isRight: false,
                    },
                    {
                        text: '42',
                        isRight: true,
                    }
                ],
            },
        ],
        17: [
            {
                order: 1,
                text: 'Сколько процентов составляет число 18 от числа 30?',
                image: null,
                answers: [
                    {
                        text: '60%',
                        isRight: true,
                    },
                    {
                        text: '0,6%',
                        isRight: false,
                    },
                    {
                        text: '12%',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Из 200 арбузов 16 оказались незрелыми. Сколько процентов всех арбузов составляют незрелые? ',
                image: null,
                answers: [
                    {
                        text: '80%',
                        isRight: false,
                    },
                    {
                        text: '8%',
                        isRight: true,
                    },
                    {
                        text: '0,8%',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Сколько процентов составляет число 145 от числа 50?',
                image: null,
                answers: [
                    {
                        text: '280%',
                        isRight: false,
                    },
                    {
                        text: '27%',
                        isRight: false,
                    },
                    {
                        text: '290%',
                        isRight: true,
                    }
                ],
            },
        ],
        18: [
            {
                order: 1,
                text: 'Какой пропорциональной зависимостью являются величины ',
                image: image18_1,
                answers: [
                    {
                        text: 'Прямо пропорциональная зависимость',
                        isRight: true,
                    },
                    {
                        text: 'Обратно пропорциональная зависимость',
                        isRight: false,
                    },
                    {
                        text: 'Не прямо и не обратно пропорциональная зависимость',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Какой пропорциональной зависимостью являются величины ',
                image: image18_2,
                answers: [
                    {
                        text: 'Прямо пропорциональная зависимость',
                        isRight: false,
                    },
                    {
                        text: 'Обратно пропорциональная зависимость',
                        isRight: true,
                    },
                    {
                        text: 'Не прямо и не обратно пропорциональная зависимость',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Какой пропорциональной зависимостью является отношение',
                image: image18_3,
                answers: [
                    {
                        text: 'Прямо пропорциональная зависимость',
                        isRight: true,
                    },
                    {
                        text: 'Обратно пропорциональная зависимость',
                        isRight: false,
                    },
                    {
                        text: 'Не прямо и не обратно пропорциональная зависимость',
                        isRight: false,
                    }
                ],
            },
        ],
        19: [
            {
                order: 1,
                text: 'Разделите число 48 в отношении 2:4 ',
                image: null,
                answers: [
                    {
                        text: '2 и 4',
                        isRight: false,
                    },
                    {
                        text: '2 и 24',
                        isRight: false,
                    },
                    {
                        text: '16 и 32',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Разделите число 182 в отношении 12:4:10',
                image: null,
                answers: [
                    {
                        text: '84, 28 и 70',
                        isRight: true,
                    },
                    {
                        text: '15, 45 и 18',
                        isRight: false,
                    },
                    {
                        text: '60, 60, 62',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Для приготовления овощного салата нужны огурец, помидор и листья салата, в отношении 4:5:2. Сколько нужновзять грамм помидоров, чтобы приготовить 44 грамма салата.',
                image: null,
                answers: [
                    {
                        text: '16',
                        isRight: true,
                    },
                    {
                        text: '20',
                        isRight: false,
                    },
                    {
                        text: '8',
                        isRight: false,
                    }
                ],
            },
        ],
        20: [
            {
                order: 1,
                text: 'Вычислите радиус окружности, длина которого равна 50,24 см',
                image: null,
                answers: [
                    {
                        text: '8',
                        isRight: true,
                    },
                    {
                        text: '4',
                        isRight: false,
                    },
                    {
                        text: '16',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите диаметр окружности, длина которого равна 37,68 см',
                image: null,
                answers: [
                    {
                        text: '24',
                        isRight: false,
                    },
                    {
                        text: '12',
                        isRight: true,
                    },
                    {
                        text: '6',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите площадь круга, радиус которого равен 5см',
                image: null,
                answers: [
                    {
                        text: '78,5',
                        isRight: true,
                    },
                    {
                        text: '15,7',
                        isRight: false,
                    },
                    {
                        text: '28,14',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'На какую геометрическую фигуру похож данный предмет',
                image: image20_1,
                answers: [
                    {
                        text: 'цилиндр',
                        isRight: false,
                    },
                    {
                        text: 'шар',
                        isRight: false,
                    },
                    {
                        text: 'конус',
                        isRight: true,
                    }
                ],
            },
        ],
        21: [
            {
                order: 1,
                text: 'На диаграмме показано количество съеденных мороженых в ресторане "Холодная сказка" за год. Определите сколько было съедено мороеного в июле?',
                image: image21_1,
                answers: [
                    {
                        text: '300',
                        isRight: false,
                    },
                    {
                        text: '320',
                        isRight: true,
                    },
                    {
                        text: '340',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'На диаграмме показано количество съеденных мороженых в ресторане "Холодная сказка" за год. Определите сколько мороженного было съедено мороженого в зимние месяца',
                image: image21_1,
                answers: [
                    {
                        text: '240',
                        isRight: false,
                    },
                    {
                        text: '160',
                        isRight: true,
                    },
                    {
                        text: '300',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'На круговой диаграмме показано количество проданных игрушек в магазине Детсткая сказка" за день. Определите сколько процентов кукол купили в магазине ',
                image: image21_2,
                answers: [
                    {
                        text: '15%',
                        isRight: true,
                    },
                    {
                        text: '11%',
                        isRight: false,
                    },
                    {
                        text: '40%',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'На круговой диаграмме показано количество проданных игрушек в магазине Детсткая сказка" за день. Определите сколько машин купили в магазине, если всех в магазине было 200 игрушек. ',
                image: image21_2,
                answers: [
                    {
                        text: '80 машин',
                        isRight: true,
                    },
                    {
                        text: '40 машин',
                        isRight: false,
                    },
                    {
                        text: '60 машин',
                        isRight: false,
                    }
                ],
            },
        ],
        22: [
            {
                order: 1,
                text: 'Найдите количество всех способов, которыми можно составить трехцветный флаг из горизонтальных полос красного, белого и синего цветов.',
                image: null,
                answers: [
                    {
                        text: '6',
                        isRight: true,
                    },
                    {
                        text: '8',
                        isRight: false,
                    },
                    {
                        text: '3',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'У Артема дома есть три поручения: помыть посуду, вынести мусор и погулять с собакой. Сколько дней он может выполнять эти поручения в разном порядке?',
                image: null,
                answers: [
                    {
                        text: '8',
                        isRight: false,
                    },
                    {
                        text: '6',
                        isRight: true,
                    },
                    {
                        text: '4',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Сколько трехзначных чисел можно составить из цифр 3,5,7 и 9 ,используя в записи числа каждую из них не более одного раза?',
                image: null,
                answers: [
                    {
                        text: '12',
                        isRight: false,
                    },
                    {
                        text: '6',
                        isRight: false,
                    },
                    {
                        text: '24',
                        isRight: true,
                    }
                ],
            },
        ],
        23: [
            {
                order: 1,
                text: 'Данные числа 6; 7; 9,8; 7/9 являются',
                image: null,
                answers: [
                    {
                        text: 'отрицательными числами',
                        isRight: false,
                    },
                    {
                        text: 'положительныеми числами',
                        isRight: true,
                    },
                    {
                        text: 'не положительные, не отрицательные',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Каким является число 0?',
                image: null,
                answers: [
                    {
                        text: 'положительным числом',
                        isRight: false,
                    },
                    {
                        text: 'отрицательным числом',
                        isRight: false,
                    },
                    {
                        text: 'не положительным, не отрицательным',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Выберите то вариант чисел, где все отрицательные',
                image: null,
                answers: [
                    {
                        text: '6; 9; -7',
                        isRight: false,
                    },
                    {
                        text: '-9; -7; -7,8',
                        isRight: true,
                    },
                    {
                        text: '-8; -12; -87; 0 ',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Какой является температура на термометре',
                image: image23_1,
                answers: [
                    {
                        text: 'положительная температура',
                        isRight: true,
                    },
                    {
                        text: 'отрицательная температура',
                        isRight: false,
                    },
                    {
                        text: 'не положительная, не отрицательная',
                        isRight: false,
                    }
                ],
            },
        ],
        24: [
            {
                order: 1,
                text: 'Выбери у каких точек отрицательная координата',
                image: image24_1,
                answers: [
                    {
                        text: 'С и В ',
                        isRight: true,
                    },
                    {
                        text: 'А и В ',
                        isRight: false,
                    },
                    {
                        text: 'А и D',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Какую координату имеет точка D',
                image: image24_2,
                answers: [
                    {
                        text: 'D(1,5)',
                        isRight: false,
                    },
                    {
                        text: 'D(-3)',
                        isRight: false,
                    },
                    {
                        text: 'D(-1,5)',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Точка К имеет координату -4, на какой координатной прямой правильно поставлена точка К',
                image: image24_3,
                answers: [
                    {
                        text: '1',
                        isRight: false,
                    },
                    {
                        text: '2',
                        isRight: true,
                    },
                    {
                        text: '3',
                        isRight: false,
                    }
                ],
            },
        ],
        25: [
            {
                order: 1,
                text: 'Выберите где представлена пара противоположных чисел',
                image: null,
                answers: [
                    {
                        text: '6 и 6',
                        isRight: false,
                    },
                    {
                        text: '-9 и -9 ',
                        isRight: false,
                    },
                    {
                        text: '254 и -254',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Каким является число -8,6',
                image: null,
                answers: [
                    {
                        text: 'Целым и положительным',
                        isRight: false,
                    },
                    {
                        text: 'Рациональным и отрицаьельным',
                        isRight: true,
                    },
                    {
                        text: 'Натуральныи и отрицательным',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Каким является число 0',
                image: null,
                answers: [
                    {
                        text: 'Положительным и целым',
                        isRight: false,
                    },
                    {
                        text: 'Натуральным и отрицательным',
                        isRight: false,
                    },
                    {
                        text: 'Целым и рациональным',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'Каким является число 6',
                image: null,
                answers: [
                    {
                        text: 'Положительным и целым',
                        isRight: true,
                    },
                    {
                        text: 'Натуральным и отрицательным',
                        isRight: false,
                    },
                    {
                        text: 'Целым и отрицательным',
                        isRight: false,
                    }
                ],
            },
        ],
        26: [
            {
                order: 1,
                text: 'Найдите модуль числа 8 ',
                image: null,
                answers: [
                    {
                        text: '8',
                        isRight: true,
                    },
                    {
                        text: '-8',
                        isRight: false,
                    },
                    {
                        text: '16',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите модуль числа -76,7',
                image: null,
                answers: [
                    {
                        text: '-76,7',
                        isRight: false,
                    },
                    {
                        text: '76,7',
                        isRight: true,
                    },
                    {
                        text: '0',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите значение выражения |15| + |-8| ',
                image: null,
                answers: [
                    {
                        text: '23',
                        isRight: true,
                    },
                    {
                        text: '7',
                        isRight: false,
                    },
                    {
                        text: '8',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите значение выражения |-28| x |6| - |-9|',
                image: null,
                answers: [
                    {
                        text: '84',
                        isRight: false,
                    },
                    {
                        text: '159',
                        isRight: true,
                    },
                    {
                        text: '177',
                        isRight: false,
                    }
                ],
            },
            {
                order: 5,
                text: 'Решите уравнение |x|=5',
                image: null,
                answers: [
                    {
                        text: '5 или -5',
                        isRight: true,
                    },
                    {
                        text: '-5',
                        isRight: false,
                    },
                    {
                        text: 'нет решения',
                        isRight: false,
                    }
                ],
            },
            {
                order: 6,
                text: 'Решите уравнение |x|=-12',
                image: null,
                answers: [
                    {
                        text: '12 или -12',
                        isRight: false,
                    },
                    {
                        text: '12',
                        isRight: false,
                    },
                    {
                        text: 'нет решения',
                        isRight: true,
                    }
                ],
            },
        ],
    };

    return questionsByWork[workNumber];
}