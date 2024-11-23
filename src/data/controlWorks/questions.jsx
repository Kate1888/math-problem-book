
//Получение вопросов по самостоятельной работе
export default function getControlWorkQuestions(workNumber) {
    let questionsByWork = {
        1: [
            {
                order: 1,
                text: 'Округлите число 5325 до сотен',
                image: null,
                answers: [
                    {
                        text: '5400',
                        isRight: false,
                    },
                    {
                        text: '5330',
                        isRight: false,
                    },
                    {
                        text: '5400',
                        isRight: true,
                    }
                ],
            },
            {
                order: 2,
                text: 'Упростите выражение и найдите его значение',
                image: null,
                answers: [
                    {
                        text: '5',
                        isRight: false,
                    },
                    {
                        text: '4',
                        isRight: false,
                    },
                    {
                        text: 'правильно',
                        isRight: true,
                    }
                ],
            },
            {
                order: 3,
                text: 'Решите уравнение',
                image: null,
                answers: [
                    {
                        text: 'праивльный',
                        isRight: true,
                    },
                    {
                        text: 'неправильно',
                        isRight: false,
                    },
                    {
                        text: 'очень неправильно',
                        isRight: false,
                    }
                ],
            },
            {
                order: 4,
                text: 'Какую цифру можно поставить вместо звездочки в числе, чтобы оно делилось на 3',
                image: null,
                answers: [
                    {
                        text: '3',
                        isRight: false,
                    },
                    {
                        text: 'правильно',
                        isRight: true,
                    },
                    {
                        text: '1',
                        isRight: false,
                    }
                ],
            },
            {
                order: 5,
                text: 'Найдите НОК и НОД',
                image: null,
                answers: [
                    {
                        text: '51 - b',
                        isRight: false,
                    },
                    {
                        text: 'правильно',
                        isRight: true,
                    },
                    {
                        text: '34 - b',
                        isRight: false,
                    }
                ],
            }
        ]
    };

    return questionsByWork[workNumber];
}