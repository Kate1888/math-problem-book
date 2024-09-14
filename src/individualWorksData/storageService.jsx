export default class StorageService {
    getWorkQuestionsState(workNumber){
        let questions = localStorage.getItem(workNumber.toString());
        return JSON.parse(questions)
    }

    setWorkQuestionsState(workNumber, workQuestionsState){
        localStorage.setItem(workNumber.toString(), JSON.stringify(workQuestionsState));
    }
}