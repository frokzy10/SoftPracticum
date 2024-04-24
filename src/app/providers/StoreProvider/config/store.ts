import {IUser} from "../../../../entities/Form";
import {makeAutoObservable} from "mobx";
import AuthServices from "../../../../entities/Form/services/AuthServices";
import axios from "axios";
import {AuthResponse} from "../../../../entities/Form/models/AuthResponse";
import {NavigateFunction} from "react-router-dom";

export default class Store {
    user = {} as IUser;
    isAuth= false;
    isloading= false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isloading = bool
    }

    async login(email: string, password: string,navigate:NavigateFunction) {
        this.setLoading(true);
        try {
            const response = await AuthServices.login(email, password);
            if(response.status === 200){
                navigate("/game")
            }
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch (e:any){
            console.log(e.response?.data?.message)
        }finally {
            this.setLoading(false);
        }
    }
    async logout(){
        this.setLoading(true);
        try {
            const response = await AuthServices.logout();
            console.log(response)
            localStorage.removeItem("token");
            this.setUser({} as IUser);
            this.setAuth(false);
        }catch (e:any){
            console.log(e.response?.data?.message)
        }finally {
            this.setLoading(false);
        }
    }
    async register(email:string,password:string,navigate:NavigateFunction){
        try {
            const res = await AuthServices.register(email,password);
            if(res.status === 200){
                navigate("/game")
            }
            localStorage.setItem("token",res.data.accessToken);
            this.setAuth(true);
            this.setUser(res.data.user);
        }catch (e:any){
            console.log(e.response?.data?.message);
        }
    }
    async checkAuth(){
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`http://localhost:8000/api/refresh`,{withCredentials:true});
            console.log(response);
            localStorage.setItem("token",response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch (e:any){
            console.log(e)
        }finally {
            this.setLoading(false);
        }
    }
}