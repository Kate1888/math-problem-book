import {getIndividualWorks} from "./individual-works/works";
import {getControlWorks} from "./control-works/works";

const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
const saveToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const individualWorkStats = "individualWorkStats";
const controlWorkStats = "controlWorkStats";

export function getIndividualWorksScore() {
    let scores = getFromStorage(individualWorkStats);
    if (scores.length === 0)
    {
        let works = getIndividualWorks();
        return works.map(work => ({ id: work.id, theme: work.theme, lastScore: 0, maxScore: 0 }));
    }

    return scores;
}

export function getIndividualWorkScoreById(id) {
    const stats = getIndividualWorksScore();
    return stats.find((item) => item.id === id) || null;
}

export function getControlWorksScore() {
    let scores = getFromStorage(controlWorkStats);
    if (scores.length === 0)
    {
        let works = getControlWorks();
        return works.map(work => ({ id: work.id, theme: work.theme, lastScore: 0, maxScore: 0 }));
    }

    return scores;
}

export function getControlWorkScoreById(id) {
    const stats = getControlWorksScore();
    return stats.find((item) => item.id === id) || null;
}

export function setIndividualWorkScore(id, score) {
    const stats = getIndividualWorksScore();
    let stat = stats.find((item) => item.id == id);
    stat.lastScore = score;
    stat.maxScore = Math.max(stat.maxScore, score);

    saveToStorage(individualWorkStats, stats);
}

export function setControlWorkScore(id, score) {
    const stats = getControlWorksScore();

    let stat = stats.find((item) => item.id == id);
    stat.lastScore = score;
    stat.maxScore = Math.max(stat.maxScore, score);

    saveToStorage(controlWorkStats, stats);
}
