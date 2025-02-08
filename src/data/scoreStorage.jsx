const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
const saveToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const individualWorkStats = "individualWorkStats";
const controlWorkStats = "controlWorkStats";

export function getIndividualWorkScore(id) {
    const stats = getFromStorage(individualWorkStats);
    return stats.find((item) => item.id === id) || null;
}

export function getIndividualWorksScore() {
    return getFromStorage(individualWorkStats);
}

export function getControlWorkScore(id) {
    const stats = getFromStorage(controlWorkStats);
    return stats.find((item) => item.id === id) || null;
}

export function getControlWorksScore() {
    return getFromStorage(controlWorkStats);
}

export function setIndividualWorkScore(id, score) {
    const stats = getFromStorage(individualWorkStats);
    const index = stats.findIndex((item) => item.id === id);

    if (index !== -1) {
        // Обновление существующей записи
        stats[index].lastScore = score;
        stats[index].maxScore = Math.max(stats[index].maxScore, score);
    } else {
        // Создание новой записи
        stats.push({ id, lastScore: score, maxScore: score });
    }

    saveToStorage(individualWorkStats, stats);
}

export function setControlWorkScore(id, score) {
    const stats = getFromStorage(controlWorkStats);
    const index = stats.findIndex((item) => item.id === id);

    if (index !== -1) {
        stats[index].lastScore = score;
        stats[index].maxScore = Math.max(stats[index].maxScore, score);
    } else {
        stats.push({ id, lastScore: score, maxScore: score });
    }

    saveToStorage(controlWorkStats, stats);
}
