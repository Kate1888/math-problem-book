
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
        ]
    };

    return questionsByWork[workNumber];
}