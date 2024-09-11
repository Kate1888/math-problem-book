import Nok from "./NOK.png";

export default function getIndividualWork(workNumber) {
    let works = {
        6: {
            theme: 'Самостоятельная работа по теме нахождение наименьшего общего кратного',
            image: Nok
        }
    };

    return works[workNumber];
}