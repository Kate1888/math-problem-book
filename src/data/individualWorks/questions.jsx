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
import image27_1 from "./questionImages/image27_1.png";
import image36_1 from "./questionImages/image36_1.png";
import image36_2 from "./questionImages/image36_2.png";
import image36_3 from "./questionImages/image36_3.png";
import image36_4 from "./questionImages/image36_4.png";
import image37_1 from "./questionImages/image37_1.png";
import image37_2 from "./questionImages/image37_2.png";
import image37_3 from "./questionImages/image37_3.png";
import image38_1 from "./questionImages/image38_1.png";
import image38_2 from "./questionImages/image38_2.png";
import image39_1 from "./questionImages/image39_1.png";
import image39_2 from "./questionImages/image39_2.png";
import image40_1 from "./questionImages/image40_1.png";
import image40_2 from "./questionImages/image40_2.png";
import image40_3 from "./questionImages/image40_3.png";

//Получение вопросов по самостоятельной работе
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
        27: [
            {
                order: 1,
                text: 'Какой знак сравнения нужно поставить между числами 6 и 9',
                image: null,
                answers: [
                    {
                        text: '>',
                        isRight: false,
                    },
                    {
                        text: '<',
                        isRight: true,
                    },
                    {
                        text: '=',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Какой знак сравнения нужно поставить между числами 12 и -43',
                image: null,
                answers: [
                    {
                        text: '<',
                        isRight: false,
                    },
                    {
                        text: '>',
                        isRight: true,
                    },
                    {
                        text: '=',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Какой знак сравнения нужно поставить между числами -54 и - 72  ',
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
                order: 4,
                text: 'Какую цифру нужно поставить вместо звездочки, чтобы сравнение было верным -6*1 > -621',
                image: null,
                answers: [
                    {
                        text: '3',
                        isRight: false,
                    },
                    {
                        text: '2',
                        isRight: false,
                    },
                    {
                        text: '1',
                        isRight: true,
                    }
                ],
            },
            {
                order: 5,
                text: 'Какую цифру нужно поставить вместо звездочки, чтобы сравнение было верным -3,*5 < -3,85',
                image: null,
                answers: [
                    {
                        text: '9',
                        isRight: true,
                    },
                    {
                        text: '0',
                        isRight: false,
                    },
                    {
                        text: '2',
                        isRight: false,
                    }
                ],
            },
            {
                order: 6,
                text: 'Выберите верное утверждение',
                image: image27_1,
                answers: [
                    {
                        text: 'b > a',
                        isRight: false,
                    },
                    {
                        text: '-n > m',
                        isRight: false,
                    },
                    {
                        text: '-a > b',
                        isRight: true,
                    }
                ],
            },
        ],
        28: [
            {
                order: 1,
                text: 'Чему равна сумма чисел -8 и -12',
                image: null,
                answers: [
                    {
                        text: '-20',
                        isRight: true,
                    },
                    {
                        text: '20',
                        isRight:false,
                    },
                    {
                        text: '-4',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Чему равна сумма чисел -54 и 30',
                image: null,
                answers: [
                    {
                        text: '24',
                        isRight: false,
                    },
                    {
                        text: '84',
                        isRight: false,
                    },
                    {
                        text: '-24',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Чему равна сумма чисел 232 и -92',
                image: null,
                answers: [
                    {
                        text: '140',
                        isRight: true,
                    },
                    {
                        text: '324',
                        isRight: false,
                    },
                    {
                        text: '-324',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Решити пример -8,43 + 6,12 + (-7) + 9,43 + (-12,12) ',
                image: null,
                answers: [
                    {
                        text: '-12,43',
                        isRight: false,
                    },
                    {
                        text: '-12,4',
                        isRight: false,
                    },
                    {
                        text: '-12',
                        isRight: true,
                    }
                ],
            },
            {
                order: 5,
                text: 'Решити пример -9,89 + 4,83 + (-15) + 9,89 + (-11,83)',
                image: null,
                answers: [
                    {
                        text: '-22',
                        isRight: true,
                    },
                    {
                        text: '-21,94',
                        isRight: false,
                    },
                    {
                        text: '23',
                        isRight: false,
                    }
                ],
            },
        ],
        29: [
            {
                order: 1,
                text: 'Чему равна разность чисел -9 и 5',
                image: null,
                answers: [
                    {
                        text: '14',
                        isRight: false,
                    },
                    {
                        text: '-4',
                        isRight: false,
                    },
                    {
                        text: '-14',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Чему равна разность чисел -24 и -26',
                image: null,
                answers: [
                    {
                        text: '2',
                        isRight: true,
                    },
                    {
                        text: '50',
                        isRight: false,
                    },
                    {
                        text: '-2',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Чему равна разность чисел 65 и 102',
                image: null,
                answers: [
                    {
                        text: '-37',
                        isRight: true,
                    },
                    {
                        text: '-167',
                        isRight: false,
                    },
                    {
                        text: '38',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Решите пример 7 - 92 - (-56) - 12',
                image: null,
                answers: [
                    {
                        text: '-129',
                        isRight: false,
                    },
                    {
                        text: '-153',
                        isRight: false,
                    },
                    {
                        text: '-41',
                        isRight: true,
                    }
                ],
            },
        ],
        30: [
            {
                order: 1,
                text: 'Найди произведение чисел 7 и -9 ',
                image: null,
                answers: [
                    {
                        text: '-63',
                        isRight: true,
                    },
                    {
                        text: '63',
                        isRight: false,
                    },
                    {
                        text: '-2',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найди произведение чисел -12,5 и -0,5',
                image: null,
                answers: [
                    {
                        text: '6,25',
                        isRight: true,
                    },
                    {
                        text: '-6,25',
                        isRight: false,
                    },
                    {
                        text: '-25',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Если произведение двух чисел положительно, то каких знаков множители?',
                image: null,
                answers: [
                    {
                        text: 'множители имеют одинаковые знаки',
                        isRight: true,
                    },
                    {
                        text: 'множители имеют разные знаки',
                        isRight: false,
                    },
                    {
                        text: 'хотя бы один из множителей равен нулю',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Если произведение двух чисел отрицательное, то каких знаков множители?',
                image: null,
                answers: [
                    {
                        text: 'множители имеют одинаковые знаки',
                        isRight: false,
                    },
                    {
                        text: 'хотя бы один из множителей равен нулю',
                        isRight: false,
                    },
                    {
                        text: 'множители имеют разные знаки',
                        isRight: true,
                    }
                ],
            },
            {
                order: 5,
                text: 'Если произведение двух чисел равно нулю, то каких знаков множители?',
                image: null,
                answers: [
                    {
                        text: 'хотя бы один из множителей равен нулю',
                        isRight: true,
                    },
                    {
                        text: 'множители имеют одинаковые знаки',
                        isRight: false,
                    },
                    {
                        text: 'множители имеют разные знаки',
                        isRight: false,
                    }
                ],
            },
        ],
        31: [
            {
                order: 1,
                text: 'Упростите выражение -5 * 6a ',
                image: null,
                answers: [
                    {
                        text: 'a',
                        isRight: false,
                    },
                    {
                        text: '-11a',
                        isRight: false,
                    },
                    {
                        text: '-30a',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Упростите выражение -25 * (-3b)',
                image: null,
                answers: [
                    {
                        text: '75b',
                        isRight: true,
                    },
                    {
                        text: '-75b',
                        isRight: false,
                    },
                    {
                        text: '-28b',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Вычислите наиболее удобным способом -0,25 * 7 * 4',
                image: null,
                answers: [
                    {
                        text: '-7',
                        isRight: true,
                    },
                    {
                        text: '7,25',
                        isRight: false,
                    },
                    {
                        text: '-7,25',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Вычислите наиболее удобным способом -0,5 * (-9) * 6',
                image: null,
                answers: [
                    {
                        text: '28,5',
                        isRight: false,
                    },
                    {
                        text: '-26,5',
                        isRight: false,
                    },
                    {
                        text: '27',
                        isRight: true,
                    }
                ],
            },
        ],
        32: [
            {
                order: 1,
                text: 'Раскройте скобки -2(4 + 2a - 5b) ',
                image: null,
                answers: [
                    {
                        text: '-8 + 2a -5b',
                        isRight: false,
                    },
                    {
                        text: '-8 - 4a + 10b',
                        isRight: true,
                    },
                    {
                        text: '8 + 4a - 10b ',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Раскройте скобки -(12a - 10c + 15b)',
                image: null,
                answers: [
                    {
                        text: '-12a + 10c - 15b',
                        isRight: true,
                    },
                    {
                        text: '12a - 10c + 15b',
                        isRight: false,
                    },
                    {
                        text: '-12a - 10c + 15b',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Вынесите общий множитель 4a + 2b + 8c',
                image: null,
                answers: [
                    {
                        text: '2(2a + b + 4c)',
                        isRight: true,
                    },
                    {
                        text: '2(2a + 4c)',
                        isRight: false,
                    },
                    {
                        text: '2(2a + b + 8c)',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Вынесите общий множитель 10a - 15b - 5c',
                image: null,
                answers: [
                    {
                        text: '5(2a + 3b) ',
                        isRight: false,
                    },
                    {
                        text: '5(2a - 3b) ',
                        isRight: false,
                    },
                    {
                        text: '5(2a - 3b - c)',
                        isRight: true,
                    }
                ],
            },
            {
                order: 5,
                text: 'Упростите выражение, приведите подобные слагаемые 4a + 7b + 6a - 6b',
                image: null,
                answers: [
                    {
                        text: '10a + b',
                        isRight: true,
                    },
                    {
                        text: '11ab',
                        isRight: false,
                    },
                    {
                        text: '10a - b',
                        isRight: false,
                    }
                ],
            },
            {
                order: 6,
                text: 'Упростите выражение, приведите подобные слагаемые 6a - 8c - 7b + 12a - 13b + 9c',
                image: null,
                answers: [
                    {
                        text: '18a + c - 20b',
                        isRight: true,
                    },
                    {
                        text: '18a - 20b',
                        isRight: false,
                    },
                    {
                        text: '18a - c + 20b',
                        isRight: false,
                    }
                ],
            },
        ],
        33: [
            {
                order: 1,
                text: 'Выполните деление - 49,6 : (-15,5)',
                image: null,
                answers: [
                    {
                        text: '3,2',
                        isRight: true,
                    },
                    {
                        text: '-3,2',
                        isRight: false,
                    },
                    {
                        text: '3,32',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Выполните деление -234,3 : 3',
                image: null,
                answers: [
                    {
                        text: '-78,1',
                        isRight: true,
                    },
                    {
                        text: '-7,81',
                        isRight: false,
                    },
                    {
                        text: '78,11',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Вычислите 94,2 : (-6) + 8 ',
                image: null,
                answers: [
                    {
                        text: '-7,7',
                        isRight: true,
                    },
                    {
                        text: '-23,7',
                        isRight: false,
                    },
                    {
                        text: '23,7',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Вычислите -48,8 : 2 - 8 ',
                image: null,
                answers: [
                    {
                        text: '32,8 ',
                        isRight: false,
                    },
                    {
                        text: '-16,4',
                        isRight: false,
                    },
                    {
                        text: '-32,4',
                        isRight: true,
                    }
                ],
            },
        ],
        34: [
            {
                order: 1,
                text: 'Найдите корень уравнения 14,2x = -42,6',
                image: null,
                answers: [
                    {
                        text: '56,8',
                        isRight: false,
                    },
                    {
                        text: '-3',
                        isRight: true,
                    },
                    {
                        text: '-3,3',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите корень уравнения -7,5x - 7 = -23,5',
                image: null,
                answers: [
                    {
                        text: '2,2',
                        isRight: true,
                    },
                    {
                        text: '-22',
                        isRight: false,
                    },
                    {
                        text: '22',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите корень уравнения 9x + 8 = 7x - 16',
                image: null,
                answers: [
                    {
                        text: '-8',
                        isRight: false,
                    },
                    {
                        text: '13',
                        isRight: false,
                    },
                    {
                        text: '-12',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите корень уравнения 25x - 18 = 10x + 12',
                image: null,
                answers: [
                    {
                        text: '22',
                        isRight: false,
                    },
                    {
                        text: '0,2',
                        isRight: false,
                    },
                    {
                        text: '2',
                        isRight: true,
                    }
                ],
            },
        ],
        35: [
            {
                order: 1,
                text: 'Выберите вырно составленное уравнение при решении залачи: У Никиты было в 3 раза больше пятёрок по физике, чем у Оли. Сколько было пятёрок у Оли, если вместе у них было 8 пятёрок.',
                image: null,
                answers: [
                    {
                        text: 'x + 3x = 8',
                        isRight: true,
                    },
                    {
                        text: '3x = 8 ',
                        isRight: false,
                    },
                    {
                        text: 'x=8',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Выберите вырно составленное уравнение при решении залачи: Необходимо вычислить, какое число было задумано, если его увелдичили на 6, а потом умножили на 4, и получили 36 ',
                image: null,
                answers: [
                    {
                        text: '(x + 6) * 4 = 36 ',
                        isRight: true,
                    },
                    {
                        text: 'x + 6 * 4 = 36',
                        isRight: false,
                    },
                    {
                        text: 'x * 4 + 6 = 36',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Решите задачу: Провод длиной 366 м разрезали на три части, причём первая часть в 3 раза длиннее третьей, а вторая – на 56 м длиннее третьей. Найдите длину каждой части провода.',
                image: null,
                answers: [
                    {
                        text: '150; 130; 86',
                        isRight: false,
                    },
                    {
                        text: '188; 120; 58',
                        isRight: false,
                    },
                    {
                        text: '186; 118; 62',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'Решите задачу: От села до города легковой автомобиль доехал за 4 ч, а грузовой – за 7 ч. Найдите скорость каждого автомобиля, если скорость грузового автомобиля на 24 км/ч меньше скорости легкового автомобиля.',
                image: null,
                answers: [
                    {
                        text: 'Скорость легкового автомабиля 32 км/ч, скорость грузового автомобиля 8 км/ч',
                        isRight: false,
                    },
                    {
                        text: 'Скорость легкового автомабиля 50 км/ч, скорость грузового автомобиля 30 км/ч',
                        isRight: false,
                    },
                    {
                        text: 'Скорость легкового автомабиля 56 км/ч, скорость грузового автомобиля 32 км/ч',
                        isRight: true,
                    }
                ],
            },
        ],
        36: [
            {
                order: 1,
                text: 'Выберите на каком рисунке верно проведен перпендикуляр от точки до прямой',
                image: image36_1,
                answers: [
                    {
                        text: '1',
                        isRight: true,
                    },
                    {
                        text: '2',
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
                text: 'Выберите на каком рисунке верно проведен перпендикуляр от точки до прямой',
                image: image36_2,
                answers: [
                    {
                        text: '1',
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
                order: 3,
                text: 'Считая, что длина стороны клетки равна 1,5см, найдите расстояние от точки B до прямой AC ',
                image: image36_3,
                answers: [
                    {
                        text: '9,5см',
                        isRight: false,
                    },
                    {
                        text: '6см',
                        isRight: false,
                    },
                    {
                        text: '9см',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'Считая, что длина стороны клетки равна 3,2см, найдите расстояние от точки AB до прямой C ',
                image: image36_4,
                answers: [
                    {
                        text: '15см',
                        isRight: false,
                    },
                    {
                        text: '16см',
                        isRight: true,
                    },
                    {
                        text: '5см',
                        isRight: false,
                    }
                ],
            },
        ],
        37: [
            {
                order: 1,
                text: 'Выберите на каком рисунке представлено симметричное изображение относительно прямой l',
                image: image37_1,
                answers: [
                    {
                        text: '1',
                        isRight: true,
                    },
                    {
                        text: '2',
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
                text: 'Сколько осей симметрии имеет данная фигура',
                image: image37_2,
                answers: [
                    {
                        text: '3',
                        isRight: false,
                    },
                    {
                        text: '4',
                        isRight: false,
                    },
                    {
                        text: '6',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Какие точки симметричны относительно прямой l',
                image: image37_3,
                answers: [
                    {
                        text: 'A и С; F и N',
                        isRight: false,
                    },
                    {
                        text: 'A и B; F и H',
                        isRight: false,
                    },
                    {
                        text: 'A и С; F и H',
                        isRight: true,
                    }
                ],
            },
        ],
        38: [
            {
                order: 1,
                text: 'Выберите на каком рисунке прямые a и b являются параллельными',
                image: image38_1,
                answers: [
                    {
                        text: '1',
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
                text: 'Выберите на каком рисунке прямые a и b непараллельны',
                image: image38_2,
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
            {
                order: 3,
                text: 'Если две прямые перпендикулярны третьей прямой, то такие прямые',
                image: null,
                answers: [
                    {
                        text: 'перпендикуларны',
                        isRight: false,
                    },
                    {
                        text: 'пересекаются',
                        isRight: false,
                    },
                    {
                        text: 'параллельны',
                        isRight: true,
                    }
                ],
            },
        ],
        39: [
            {
                order: 1,
                text: 'Выберите координату точки D',
                image: image39_2,
                answers: [
                    {
                        text: '(-2;-2)',
                        isRight: true,
                    },
                    {
                        text: '(2;-2)',
                        isRight: false,
                    },
                    {
                        text: '(-3;2)',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Выберите точку, у которой ордината равна 2',
                image: image39_2,
                answers: [
                    {
                        text: 'A',
                        isRight: true,
                    },
                    {
                        text: 'B',
                        isRight: false,
                    },
                    {
                        text: 'D',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Выберите точку с координатой (4;4)',
                image: image39_1,
                answers: [
                    {
                        text: 'H',
                        isRight: false,
                    },
                    {
                        text: 'F',
                        isRight: false,
                    },
                    {
                        text: 'G',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'Выберите точку, у которой абсциса равна 0',
                image: image39_1,
                answers: [
                    {
                        text: 'F',
                        isRight: false,
                    },
                    {
                        text: 'E',
                        isRight: true,
                    },
                    {
                        text: 'R',
                        isRight: false,
                    }
                ],
            },
        ],
        40: [
            {
                order: 1,
                text: 'Определите график какой формулы начертен',
                image: image40_1,
                answers: [
                    {
                        text: 'y=4x',
                        isRight: true,
                    },
                    {
                        text: 'y=-4,5x',
                        isRight: false,
                    },
                    {
                        text: 'y=4,5',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Определите график какой формулы начертен',
                image: image40_2,
                answers: [
                    {
                        text: 'y=-3,5x',
                        isRight: true,
                    },
                    {
                        text: 'y=3x',
                        isRight: false,
                    },
                    {
                        text: 'y=-2,5x',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'На графике представлено кольчество проданных мороженых за рабочий день магазина "Сказка". Определите во сколько было проданно больше всего мороженого?',
                image: image40_3,
                answers: [
                    {
                        text: '20',
                        isRight: false,
                    },
                    {
                        text: '16',
                        isRight: false,
                    },
                    {
                        text: '11',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'На графике представлено кольчество проданных мороженых за рабочий день магазина "Сказка". Определите в какое время продали 12 штук мороженого',
                image: image40_3,
                answers: [
                    {
                        text: '8 и 13',
                        isRight: false,
                    },
                    {
                        text: '17',
                        isRight: true,
                    },
                    {
                        text: '10 и 13',
                        isRight: false,
                    }
                ],
            },
        ],
    };

    return questionsByWork[workNumber];
}