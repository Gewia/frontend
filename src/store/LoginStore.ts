import {observable, action} from "mobx";

class LoginStore {
    @observable email = '';
    @observable password = '';
    @observable stayLoggedIn = false;
    @observable errorText: string = '';
    @observable valid = false;

    @action setEmail(value: string) {
        this.email = value;
    }
    @action setPassword(value: string) {
        this.password = value;
    }
    @action toggleStayLoggedIn() {
        this.stayLoggedIn = !this.stayLoggedIn;
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

export default LoginStore;
