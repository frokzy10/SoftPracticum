import {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";
import {API_URL} from "../../../shared/api/api";

export default class UserService{
    static fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return API_URL.get<IUser[]>("/users")
    }
}