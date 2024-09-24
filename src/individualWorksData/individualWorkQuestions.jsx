import image7_1 from "./questionImages/image7_1.png";
import image7_2 from "./questionImages/image7_2.png";
import image7_3 from "./questionImages/image7_3.png";
import image8_1 from "./questionImages/image8_1.png";
import image8_2 from "./questionImages/image8_2.png";
import image8_4 from "./questionImages/image8_4.png";
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
    };

    return questionsByWork[workNumber];
}