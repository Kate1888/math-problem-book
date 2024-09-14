import Image6 from "./images/image6.png";

export default function getIndividualWork(workNumber) {
    let works = {
        6: {
            theme: 'Самостоятельная работа по теме нахождение наименьшего общего кратного',
            image: Image6
        }
    };

    return works[workNumber];
}