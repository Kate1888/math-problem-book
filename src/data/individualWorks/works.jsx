import Image1 from "./theoryImages/image1.png";
import Image2 from "./theoryImages/image2.png";
import Image3 from "./theoryImages/image4.png";
import Image4 from "./theoryImages/image4.png";
import Image5 from "./theoryImages/image5.png";
import Image6 from "./theoryImages/image6.png";
import Image7 from "./theoryImages/image7.png";
import Image8 from "./theoryImages/image8.png";
import Image9 from "./theoryImages/image9.png";
import Image10 from "./theoryImages/image10.png";
import Image11 from "./theoryImages/image11.png";
import Image12 from "./theoryImages/image12.png";
import Image13 from "./theoryImages/image13.png";
import Image14 from "./theoryImages/image14.png";
import Image15 from "./theoryImages/image15.png";
import Image16 from "./theoryImages/image16.png";
import Image17 from "./theoryImages/image17.png";
import Image18 from "./theoryImages/image18.png";
import Image19 from "./theoryImages/image19.png";
import Image20 from "./theoryImages/image20.png";
import Image21 from "./theoryImages/image21.png";
import Image22 from "./theoryImages/image22.png";
import Image23 from "./theoryImages/image23.png";
import Image24 from "./theoryImages/image24.png";
import Image25 from "./theoryImages/image25.png";
import Image26 from "./theoryImages/image26.png";
import Image27 from "./theoryImages/image27.png";
import Image28 from "./theoryImages/image28.png";
import Image29 from "./theoryImages/image29.png";
import Image30 from "./theoryImages/image30.png";
import Image31 from "./theoryImages/image31.png";
import Image32 from "./theoryImages/image32.png";
import Image33 from "./theoryImages/image33.png";
import Image34 from "./theoryImages/image34.png";
import Image35 from "./theoryImages/image35.png";
import Image36 from "./theoryImages/image36.png";
import Image37 from "./theoryImages/image37.png";
import Image38 from "./theoryImages/image38.png";
import Image39 from "./theoryImages/image39.png";
import Image40 from "./theoryImages/image40.png";

//Получение самостоятельноq работы по номеру самостоятельной работы
export default function getIndividualWorks(workNumbers) {
    const works = [
        {
            id: 1,
            theme: 'Самостоятельная работа по теме действия с натуральними числами',
            theoryImage: Image1
        },
        {
            id: 2,
            theme: 'Самостоятельная работа по теме числовые и бувкенные выражения',
            theoryImage: Image2
        },
        {
            id: 3,
            theme: 'Самостоятельная работа по теме признаки делимости натуральных чисел',
            theoryImage: Image3
        },
        {
            id: 4,
            theme: 'Самостоятельная работа по теме простые и составные числа',
            theoryImage: Image4
        },
        {
            id: 5,
            theme: 'Самостоятельная работа по теме нахождение наибольшего общего делителя',
            theoryImage: Image5
        },
        {
            id: 6,
            theme: 'Самостоятельная работа по теме нахождение наименьшего общего кратного',
            theoryImage: Image6
        },
        {
            id: 7,
            theme: 'Самостоятельная работа по теме многоугольники',
            theoryImage: Image7
        },
        {
            id: 8,
            theme: 'Самостоятельная работа по теме окружность и многогранники',
            theoryImage: Image8
        },
         {
            id: 9,
            theme: 'Самостоятельная работа по теме обыкновенные дроби',
            theoryImage: Image9
        },
        {
            id: 10,
            theme: 'Самостоятельная работа по теме десятичные дроби',
            theoryImage: Image10
        },
        {
            id: 11,
            theme: 'Самостоятельная работа по теме преобразование обыкновенной дроби в десятичную, десятичное приближение обыкновенной дроби',
            theoryImage: Image11
        },
        {
            id: 12,
            theme: 'Самостоятельная работа по теме среднее арифметическое, среднее значение величин',
            theoryImage: Image12
        },
        {
            id: 13,
            theme: 'Самостоятельная работа по теме проценты, нахождение процентов от числа',
            theoryImage: Image13
        },
        {
            id: 14,
            theme: 'Самостоятельная работа по теме нахождение числа по его процентам',
            theoryImage: Image14
        },
        {
            id: 15,
            theme: 'Самостоятельная работа по теме отношения',
            theoryImage: Image15
        },
        {
            id: 16,
            theme: 'Самостоятельная работа по теме пропорции',
            theoryImage: Image16
        },
        {
            id: 17,
            theme: 'Самостоятельная работа по теме процентное отношение двух чисел',
            theoryImage: Image17
        },
        {
            id: 18,
            theme: 'Самостоятельная работа по теме прямая и обратная пропорциональные зависимости',
            theoryImage: Image18
        },
        {
            id: 19,
            theme: 'Самостоятельная работа по теме деление числа в данном отношении',
            theoryImage: Image19
        },
        {
            id: 20,
            theme: 'Самостоятельная работа по теме длина окружности, круг, цилиндр, конус и шар',
            theoryImage: Image20
        },
        {
            id: 21,
            theme: 'Самостоятельная работа по теме диаграммы',
            theoryImage: Image21
        },
        {
            id: 22,
            theme: 'Самостоятельная работа по теме комбинаторные задачи',
            theoryImage: Image22
        },
        {
            id: 23,
            theme: 'Самостоятельная работа по теме положительные и отрицательные числа',
            theoryImage: Image23
        },
        {
            id: 24,
            theme: 'Самостоятельная работа по теме координатная прямая',
            theoryImage: Image24
        },
        {
            id: 25,
            theme: 'Самостоятельная работа по теме целые и рациональные числа ',
            theoryImage: Image25
        },
        {
            id: 26,
            theme: 'Самостоятельная работа по теме модуль числа',
            theoryImage: Image26
        },
        {
            id: 27,
            theme: 'Самостоятельная работа по теме сравнения рациональных чисел',
            theoryImage: Image27
        },
        {
            id: 28,
            theme: 'Самостоятельная работа по теме сложение рациональных чисел',
            theoryImage: Image28
        },
        {
            id: 29,
            theme: 'Самостоятельная работа по теме вычитание рациональных чисел',
            theoryImage: Image29
        },
        {
            id: 30,
            theme: 'Самостоятельная работа по теме умножение рациональных чисел',
            theoryImage: Image30
        },
        {
            id: 31,
            theme: 'Самостоятельная работа по теме переместительное и сочетательное свойство умножения рациональных чисел ',
            theoryImage: Image31
        },
        {
            id: 32,
            theme: 'Самостоятельная работа по теме распределительное свойство умножения рациональных чисел ',
            theoryImage: Image32
        },
        {
            id: 33,
            theme: 'Самостоятельная работа по теме деление рациональных чисел',
            theoryImage: Image33
        },
        {
            id: 34,
            theme: 'Самостоятельная работа по теме решение уравнений',
            theoryImage: Image34
        },
        {
            id: 35,
            theme: 'Самостоятельная работа по теме решение задач с помощью уравнений',
            theoryImage: Image35
        },
        {
            id: 36,
            theme: 'Самостоятельная работа по теме перпендикулярные прямые',
            theoryImage: Image36
        },
        {
            id: 37,
            theme: 'Самостоятельная работа по теме центральная и осевая симметрии',
            theoryImage: Image37
        },
        {
            id: 38,
            theme: 'Самостоятельная работа по теме параллельные прямые',
            theoryImage: Image38
        },
        {
            id: 39,
            theme: 'Самостоятельная работа по теме координатная плоскость',
            theoryImage: Image39
        },
        {
            id: 40,
            theme: 'Самостоятельная работа по теме графики',
            theoryImage: Image40
        }
    ];


    return works.filter(work => 
        workNumbers.some(workNumber => workNumber == work.id)
    );
}

