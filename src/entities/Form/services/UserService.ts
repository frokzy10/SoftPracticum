import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {API_URL} from "../../../shared/api/api";
import {AuthResponse} from "../models/AuthResponse";

export default class UserService{
    static fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return API_URL.get<IUser[]>("/users")
    }
    static getPoint():Promise<AxiosResponse<AuthResponse>>{
        return API_URL.get<AuthResponse>("/getPoint")
    }
}