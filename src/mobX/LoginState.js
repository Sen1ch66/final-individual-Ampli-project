import { makeAutoObservable } from "mobx";

class LoginState{
    isLogin = true;
    constructor(){
        makeAutoObservable(this)
    }
    setIsLogin(){
        this.isLogin = !this.isLogin
    }
}
export default new LoginState();