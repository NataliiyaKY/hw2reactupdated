import axios, {AxiosResponse} from "axios";
import {UserModel} from "../models/UserModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json', charset: 'utf-8'}
})

const getAllUsers = (): Promise<AxiosResponse<UserModel[]>> => {
    return axiosInstance.get('/users')
}

export {getAllUsers}