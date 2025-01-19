import Image1 from "./theory-images/image1.png";
import Image2 from "./theory-images/image2.png";
import Image3 from "./theory-images/image4.png";
import Image4 from "./theory-images/image4.png";
import Image5 from "./theory-images/image5.png";
import Image6 from "./theory-images/image6.png";
import Image7 from "./theory-images/image7.png";
import Image8 from "./theory-images/image8.png";
import Image9 from "./theory-images/image9.png";
import Image10 from "./theory-images/image10.png";
import Image11 from "./theory-images/image11.png";
import Image12 from "./theory-images/image12.png";
import Image13 from "./theory-images/image13.png";
import Image14 from "./theory-images/image14.png";
import Image15 from "./theory-images/image15.png";
import Image16 from "./theory-images/image16.png";
import Image17 from "./theory-images/image17.png";
import Image18 from "./theory-images/image18.png";
import Image19 from "./theory-images/image19.png";
import Image20 from "./theory-images/image20.png";
import Image21 from "./theory-images/image21.png";
import Image22 from "./theory-images/image22.png";
import Image23 from "./theory-images/image23.png";
import Image24 from "./theory-images/image24.png";
import Image25 from "./theory-images/image25.png";
import Image26 from "./theory-images/image26.png";
import Image27 from "./theory-images/image27.png";
import Image28 from "./theory-images/image28.png";
import Image29 from "./theory-images/image29.png";
import Image30 from "./theory-images/image30.png";
import Image31 from "./theory-images/image31.png";
import Image32 from "./theory-images/image32.png";
import Image33 from "./theory-images/image33.png";
import Image34 from "./theory-images/image34.png";
import Image35 from "./theory-images/image35.png";
import Image36 from "./theory-images/image36.png";
import Image37 from "./theory-images/image37.png";
import Image38 from "./theory-images/image38.png";
import Image39 from "./theory-images/image39.png";
import Image40 from "./theory-images/image40.png";

//Получение самостоятельной работы по номеру самостоятельной работы
export function getIndividualWorks() {
    const works = [
        {
            id: 1,
            theme: 'Действия с натуральними числами',
            theoryImage: Image1
        },
        {
            id: 2,
            theme: 'Числовые и бувкенные выражения',
            theoryImage: Image2
        },
        {
            id: 3,
            theme: 'Признаки делимости натуральных чисел',
            theoryImage: Image3
        },
        {
            id: 4,
            theme: 'Простые и составные числа',
            theoryImage: Image4
        },
        {
            id: 5,
            theme: 'Нахождение наибольшего общего делителя',
            theoryImage: Image5
        },
        {
            id: 6,
            theme: 'Нахождение наименьшего общего кратного',
            theoryImage: Image6
        },
        {
            id: 7,
            theme: 'Многоугольники',
            theoryImage: Image7
        },
        {
            id: 8,
            theme: 'Окружность и многогранники',
            theoryImage: Image8
        },
         {
            id: 9,
            theme: 'Обыкновенные дроби',
            theoryImage: Image9
        },
        {
            id: 10,
            theme: 'Десятичные дроби',
            theoryImage: Image10
        },
        {
            id: 11,
            theme: 'Преобразование обыкновенной дроби в десятичную, десятичное приближение обыкновенной дроби',
            theoryImage: Image11
        },
        {
            id: 12,
            theme: 'Среднее арифметическое, среднее значение величин',
            theoryImage: Image12
        },
        {
            id: 13,
            theme: 'Проценты, нахождение процентов от числа',
            theoryImage: Image13
        },
        {
            id: 14,
            theme: 'Нахождение числа по его процентам',
            theoryImage: Image14
        },
        {
            id: 15,
            theme: 'Отношения',
            theoryImage: Image15
        },
        {
            id: 16,
            theme: 'Пропорции',
            theoryImage: Image16
        },
        {
            id: 17,
            theme: 'Процентное отношение двух чисел',
            theoryImage: Image17
        },
        {
            id: 18,
            theme: 'Прямая и обратная пропорциональные зависимости',
            theoryImage: Image18
        },
        {
            id: 19,
            theme: 'Деление числа в данном отношении',
            theoryImage: Image19
        },
        {
            id: 20,
            theme: 'Длина окружности, круг, цилиндр, конус и шар',
            theoryImage: Image20
        },
        {
            id: 21,
            theme: 'Диаграммы',
            theoryImage: Image21
        },
        {
            id: 22,
            theme: 'Комбинаторные задачи',
            theoryImage: Image22
        },
        {
            id: 23,
            theme: 'Положительные и отрицательные числа',
            theoryImage: Image23
        },
        {
            id: 24,
            theme: 'Координатная прямая',
            theoryImage: Image24
        },
        {
            id: 25,
            theme: 'Целые и рациональные числа ',
            theoryImage: Image25
        },
        {
            id: 26,
            theme: 'Модуль числа',
            theoryImage: Image26
        },
        {
            id: 27,
            theme: 'Сравнения рациональных чисел',
            theoryImage: Image27
        },
        {
            id: 28,
            theme: 'Сложение рациональных чисел',
            theoryImage: Image28
        },
        {
            id: 29,
            theme: 'Вычитание рациональных чисел',
            theoryImage: Image29
        },
        {
            id: 30,
            theme: 'Умножение рациональных чисел',
            theoryImage: Image30
        },
        {
            id: 31,
            theme: 'Переместительное и сочетательное свойство умножения рациональных чисел ',
            theoryImage: Image31
        },
        {
            id: 32,
            theme: 'Распределительное свойство умножения рациональных чисел ',
            theoryImage: Image32
        },
        {
            id: 33,
            theme: 'Деление рациональных чисел',
            theoryImage: Image33
        },
        {
            id: 34,
            theme: 'Решение уравнений',
            theoryImage: Image34
        },
        {
            id: 35,
            theme: 'Решение задач с помощью уравнений',
            theoryImage: Image35
        },
        {
            id: 36,
            theme: 'Перпендикулярные прямые',
            theoryImage: Image36
        },
        {
            id: 37,
            theme: 'Центральная и осевая симметрии',
            theoryImage: Image37
        },
        {
            id: 38,
            theme: 'Параллельные прямые',
            theoryImage: Image38
        },
        {
            id: 39,
            theme: 'Координатная плоскость',
            theoryImage: Image39
        },
        {
            id: 40,
            theme: 'Графики',
            theoryImage: Image40
        }
    ];

    return works;
}

export function getIndividualWorkByNumber(workNumber) {
    const works = getIndividualWorks();

    return works.find(work => work.id == workNumber);

}

export function getIndividualWorksByNumbers(workNumbers) {
    const works = getIndividualWorks();

    return works.filter(work =>
        workNumbers.some(workNumber => workNumber == work.id)
    );
}

