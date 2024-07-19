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
const isLoginState = new LoginState()
export default isLoginState;