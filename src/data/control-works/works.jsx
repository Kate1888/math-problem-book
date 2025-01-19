//Получение самостоятельной работы по номеру самостоятельной работы
export function getControlWorks() {
    const works = [
        {
            id: 1,
            theme: 'Натуральные числа',
            individualWorks: [1, 2, 3, 4, 5, 6]
        },
        {
            id: 2,
            theme: 'Геометрические фигуры, фигуры на плоскости',
            individualWorks: [7, 8]
        },
        {
            id: 3,
            theme: 'Дроби',
            individualWorks: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
        },
        {
            id: 4,
            theme: 'Рациональные числа',
            individualWorks: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        },
        {
            id: 5,
            theme: 'Итоговая контрольная работа',
            individualWorks: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        },
    ];

    return works;
}

export function getControlWork(workNumber) {
    const works = getControlWorks();

    return works.find(work => work.id == workNumber);
}