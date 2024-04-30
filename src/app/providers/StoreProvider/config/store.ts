import {IUser} from "../../../../entities/Form";
import {action, makeAutoObservable} from "mobx";
import AuthServices from "../../../../entities/Form/services/AuthServices";
import axios from "axios";
import {NavigateFunction} from "react-router-dom";
import {AuthResponse} from "../../../../entities/Form/models/AuthResponse";


export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    constructor() {
        makeAutoObservable(this)
    }

    @action setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    @action setUser(user: IUser) {
        this.user = user;
    }

    @action setLoading(bool: boolean) {
        this.isLoading = bool
    }
    @action clearUserStore(){
        this.user.email = "";
        this.user.points = 0;
        this.user.isActivated = false;
        this.user.id = ""
    }

    async login(email: string, password: string, navigate: NavigateFunction) {
        try {
            const response = await AuthServices.login(email, password);
            if (response.status === 200) {
                navigate("/game")
            }
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }

    @action async logout() {
        try {
            const response = await AuthServices.logout();
            console.log(response)
            localStorage.removeItem("token");
            this.setUser({} as IUser);
            this.setAuth(false);
            this.clearUserStore();
        } catch (e: any) {
            console.log(e.response?.data?.message)
        }
    }

    async register(email: string, password: string, navigate: NavigateFunction) {
        this.setLoading(false)
        try {
            const res = await AuthServices.register(email, password);
            if (res.status === 200) {
                navigate("/game")
            }
            localStorage.setItem("token", res.data.accessToken);
            this.setAuth(true);
            this.setUser(res.data.user);
            this.setLoading(true)
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`http://localhost:8000/api/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }

    async UpdatePointInFrontend(userId:any,token:any){
        try {
            const response = await axios.post("http://localhost:8000/api/points",{
                    userId: userId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log(response.data);
            const updatedUser = { ...this.user, points: response.data.points };
            console.log(updatedUser)
            this.setUser(updatedUser);
            this.setAuth(true);
        }catch (e){
            console.log(e)
        }
    }
}