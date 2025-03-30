import image2_1 from './question-images/image2_1.png'
import image2_2 from './question-images/image2_2.png'
import image2_3 from './question-images/image2_3.png'
import image2_4 from './question-images/image2_4.png'
import image4_1 from './question-images/image4_1.png'
import image4_4 from './question-images/image4_4.png'
import image5_6 from './question-images/image5_6.png'

//Получение вопросов по контрольной работе
export default function getControlWorkQuestions(workNumber) {
    let questionsByWork = {
        1: [
            {
                order: 1,
                text: 'Округлите число 6875 до сотен',
                image: null,
                answers: [
                    {
                        text: '6800',
                        isRight: false,
                    },
                    {
                        text: '6880',
                        isRight: false,
                    },
                    {
                        text: '6900',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Округлите число 15789 до тысяч',
                image: null,
                answers: [
                    {
                        text: '16000',
                        isRight: true,
                    },
                    {
                        text: '15000',
                        isRight: false,
                    },
                    {
                        text: '20000',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Упростите выражение 5(6a+4)+20 и найдите его значение, если a=3',
                image: null,
                answers: [
                    {
                        text: '130',
                        isRight: true,
                    },
                    {
                        text: '114',
                        isRight: false,
                    },
                    {
                        text: '100',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Решите уравнение: 15x-9x+18=48',
                image: null,
                answers: [
                    {
                        text: '4',
                        isRight: false,
                    },
                    {
                        text: '5',
                        isRight: true,
                    },
                    {
                        text: '7',
                        isRight: false,
                    }
                ],
            },
            {
                order: 5,
                text: 'Какую цифру можно поставить вместо звездочки в числе, в числе 46*28, чтобы оно делилось на 3',
                image: null,
                answers: [
                    {
                        text: '3',
                        isRight: false,
                    },
                    {
                        text: '1',
                        isRight: true,
                    },
                    {
                        text: '6',
                        isRight: false,
                    }
                ],
            },
            {
                order: 6,
                text: 'Найдите НОД и НОК чисел 96,72 и 48',
                image: null,
                answers: [
                    {
                        text: 'НОД=24, НОК=288',
                        isRight: true,
                    },
                    {
                        text: 'НОД=12, НОК=144',
                        isRight: false,
                    },
                    {
                        text: 'НОД=6, НОК=72',
                        isRight: false,
                    }
                ],
            }
        ],
        2: [
            {
                order: 1,
                text: 'Найдите угол ABD',
                image: image2_1,
                answers: [
                    {
                        text: '70',
                        isRight: false,
                    },
                    {
                        text: '65',
                        isRight: true,
                    },
                    {
                        text: '60',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите периметр и площадь фигуры',
                image: image2_2,
                answers: [
                    {
                        text: 'P = 108, S = 488',
                        isRight: false,
                    },
                    {
                        text: 'P = 106, S = 500',
                        isRight: false,
                    },
                    {
                        text: 'P = 106, S = 488',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Выберите радиусы окружности',
                image: image2_3,
                answers: [
                    {
                        text: 'BO, OA, OC',
                        isRight: true,
                    },
                    {
                        text: 'BA, OA, DE',
                        isRight: false,
                    },
                    {
                        text: 'OC, OB, DE',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Выберите грань равную грани ABCD',
                image: image2_4,
                answers: [
                    {
                        text: 'C D D1 C1',
                        isRight: false,
                    },
                    {
                        text: 'A A1 B B1',
                        isRight: false,
                    },
                    {
                        text: 'A1 B1 C1 D1',
                        isRight: true,
                    }
                ],
            },
            {
                order: 5,
                text: 'Вычислите длину окружности, радиус которой равен 6',
                image: null,
                answers: [
                    {
                        text: '18,84',
                        isRight: false,
                    },
                    {
                        text: '37,68',
                        isRight: true,
                    },
                    {
                        text: '37',
                        isRight: false,
                    }
                ],
            },
            {
                order: 6,
                text: 'Найдите диаметр круга, площадь которого равна 12,56',
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
                        text: '4',
                        isRight: true,
                    }
                ],
            }
        ],
        3: [
            {
                order: 1,
                text: ' Решите пример: (68,4 : 1,8 + 5,625 : 0,75) * 2',
                image: null,
                answers: [
                    {
                        text: '91',
                        isRight: true,
                    },
                    {
                        text: '90',
                        isRight: false,
                    },
                    {
                        text: '85',
                        isRight: false,
                    }
                ],
            },
            {
                order: 2,
                text: 'Найдите 45 % от числа 620 ',
                image: null,
                answers: [
                    {
                        text: '200',
                        isRight: false,
                    },
                    {
                        text: '279',
                        isRight: true,
                    },
                    {
                        text: '179',
                        isRight: false,
                    }
                ],
            },
            {
                order: 3,
                text: 'Найдите число, если 150 % этого числа равны 180',
                image: null,
                answers: [
                    {
                        text: '100',
                        isRight: false,
                    },
                    {
                        text: '270',
                        isRight: false,
                    },
                    {
                        text: '120',
                        isRight: true,
                    }
                ],
            },
            {
                order: 4,
                text: 'Найдите неизвестный член пропорции: x : 84 = 16 : 28',
                image: null,
                answers: [
                    {
                        text: '147',
                        isRight: false,
                    },
                    {
                        text: '48',
                        isRight: true,
                    },
                    {
                        text: '40',
                        isRight: false,
                    }
                ],
            },
            {
                order: 5,
                text: 'Решите задачу: Для приготовления плова нужно взять рис, мясо и морковь в отношении 6 : 8 : 3. Сколько граммов риса потребуется, чтобы приготовить 204 грамма плова?',
                image: null,
                answers: [
                    {
                        text: '72 гр.',
                        isRight: true,
                    },
                    {
                        text: '96 гр.',
                        isRight: false,
                    },
                    {
                        text: '36 гр.',
                        isRight: false,
                    }
                ],
            },
            {
                order: 6,
                text: 'Решите задачу: Ноутбук стоил 50 000 рублей. Сначала его цена увеличилась на 20%, а затем новую цену снизили на 25%. На сколько процентов изменилась его первоначальная стоимость?',
                image: null,
                answers: [
                    {
                        text: 'на 90%',
                        isRight: false,
                    },
                    {
                        text: 'на 10%',
                        isRight: true,
                    },
                    {
                        text: 'на 11%',
                        isRight: false,
                    }
                ],
            }
        ],
        4: [
            {
                order: 1,
                text: 'Определите координаты точек B и D',
                image: image4_1,
                answers: [
                    {
                        text: 'D(2);B(-2)',
                        isRight: false,
                    },
                    {
                        text: 'D(4);B(-3,5)',
                        isRight: false,
                    },
                    {
                        text: 'D(3);B(-2,5)',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
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
                order: 3,
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
                order: 4,
                text: 'Выберите верное утверждение',
                image: image4_4,
                answers: [
                    {
                        text: 'b > n',
                        isRight: false,
                    },
                    {
                        text: '-n < m',
                        isRight: true,
                    },
                    {
                        text: 'a < n',
                        isRight: false,
                    }
                ],
            },
            {
                order: 5,
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
            }
        ],
        5: [
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
                text: ' Решите пример: (68,4 : 1,8 + 5,625 : 0,75) * 2',
                image: null,
                answers: [
                    {
                        text: '91',
                        isRight: true,
                    },
                    {
                        text: '90',
                        isRight: false,
                    },
                    {
                        text: '85',
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
            {
                order: 6,
                text: 'Выбирете координату точки A',
                image: image5_6,
                answers: [
                    {
                        text: '-2;-3',
                        isRight: false,
                    },
                    {
                        text: '2;-3',
                        isRight: false,
                    },
                    {
                        text: '-3;2',
                        isRight: true,
                    }
                ],
            }
        ]
    };

    return questionsByWork[workNumber];
}