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

export default function getIndividualWork(workNumber) {
    let works = {
        1: {
            theme: 'Самостоятельная работа по теме действия с натуральними числами',
            theoryImage: Image1
        },
        2: {
            theme: 'Самостоятельная работа по теме числовые и бувкенные выражения',
            theoryImage: Image2
        },
        3: {
            theme: 'Самостоятельная работа по теме признаки делимости натуральных чисел',
            theoryImage: Image3
        },
        4: {
            theme: 'Самостоятельная работа по теме простые и составные числа',
            theoryImage: Image4
        },
        5: {
            theme: 'Самостоятельная работа по теме нахождение наибольшего общего делителя',
            theoryImage: Image5
        },
        6: {
            theme: 'Самостоятельная работа по теме нахождение наименьшего общего кратного',
            theoryImage: Image6
        },
        7: {
            theme: 'Самостоятельная работа по теме многоугольники',
            theoryImage: Image7
        },
        8: {
            theme: 'Самостоятельная работа по теме окружность и многогранники',
            theoryImage: Image8
        },
        9: {
            theme: 'Самостоятельная работа по теме обыкновенные дроби',
            theoryImage: Image9
        },
        10: {
            theme: 'Самостоятельная работа по теме десятичные дроби',
            theoryImage: Image10
        },
        11: {
            theme: 'Самостоятельная работа по теме преобразование обыкновенной дроби в десятичную, десятичное приближение обыкновенной дроби',
            theoryImage: Image11
        },
        12: {
            theme: 'Самостоятельная работа по теме среднее арифметическое, среднее значение величин',
            theoryImage: Image12
        },
        13: {
            theme: 'Самостоятельная работа по теме проценты, нахождение процентов от числа',
            theoryImage: Image13
        },
        14: {
            theme: 'Самостоятельная работа по теме нахождение числа по его процентам',
            theoryImage: Image14
        },
        15: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        16: {
            theme: 'Самостоятельная работа по теме нахождение наименьшего общего кратного',
            theoryImage: Image6
        },
        17: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        18: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        19: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        20: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        21: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        22: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        23: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        24: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        25: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        26: {
            theme: 'Самостоятельная работа по теме нахождение наименьшего общего кратного',
            theoryImage: Image6
        },
        27: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        28: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        29: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        30: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        31: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        32: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        33: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        34: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        35: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        },
        36: {
            theme: 'Самостоятельная работа по теме нахождение наименьшего общего кратного',
            theoryImage: Image6
        },
        37: {
            theme: 'Самостоятельная работа ',
            theoryImage: Image6
        }
    };

    return works[workNumber];
}