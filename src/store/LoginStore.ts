import {observable, action} from "mobx";

class LoginStore {
    @observable email = '';
    @observable password = '';
    @observable StayLoggedIn = false;
    @observable errorText: string = '';
    @observable valid = false;

    @action setEmail(value: string) {
        this.email = value;
    }
    @action setPassword(value: string) {
        this.password = value;
    }
    @action setStayLoggedIn(value: boolean) {
        this.StayLoggedIn = value;
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