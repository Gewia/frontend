import {action, observable} from "mobx";
import {DifficultyEnum} from "../models/difficulty.enum";

class AddTaskStore {
    @observable title: string = '';
    @observable subjectList: string[] = [];
    @observable selectedSubject: string = '';
    @observable selectedDifficulty: DifficultyEnum = DifficultyEnum.EASY;
    @observable lectureList: string[] = [];
    @observable selectedLecture: string = '';
    @observable description: string = '';
    @observable taskList: {title: string, description: string, answers:{name: string, selected: boolean}[]}[] = [];

    @action setTitle(value: string) {
        this.title = value;
    }
    @action setSubjectList(value: string[]) {
        this.subjectList = value;
    }
    @action setSelectedSubject(value: string) {
        this.selectedSubject = value;
    }
    @action setSelectedDifficulty(value: DifficultyEnum) {
        this.selectedDifficulty = value;
    }
    @action setLectureList(value: string[]) {
        this.lectureList = value;
    }
    @action setSelectedLecture(value: string) {
        this.selectedLecture = value;
    }
    @action setDescription(value: string) {
        this.description = value;
    }
    @action setTaskList(value: {title: string, description: string, answers:{name: string, selected: boolean}[]}[]) {
        this.taskList = value;
    }
    @action addTaskListItem(value: {title: string, description: string, answers:{name: string, selected: boolean}[]}) {
        this.taskList.push(value);
    }
}

export default AddTaskStore;