import {observable, action} from "mobx";

class RegisterStore {
    @observable email = '';
    @observable password = '';
    @observable retypedPassword = '';
    @observable isGtcAccepted = false;
    @observable accountType: 'teacher' | 'student' | 'unset' = 'unset';
    @observable teacherToken = '';
    @observable errorText: string = '';
    @observable valid = false;

    @action setEmail(value: string) {
        this.email = value;
    }
    @action setPassword(value: string) {
        this.password = value;
    }
    @action setRetypedPassword(value: string) {
        this.retypedPassword = value;
    }
    @action setIsGtcAccepted(value: boolean) {
        this.isGtcAccepted = value;
    }
    @action setAccountType(value: 'teacher' | 'student' | 'unset') {
        this.accountType = value;
    }
    @action setTeacherToken(value: string) {
        this.teacherToken = value;
    }
    @action setErrorText(value: string) {
        this.errorText = value;
    }
    @action clearErrorText() {
        this.errorText = '';
    }
    @action validate() {
        this.valid = true;
    }
}

export default RegisterStore;