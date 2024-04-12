import axios from "axios";
import { API_URL } from "../config/api-config";
import { ILoginform } from "../interface";

const instance = axios.create({
    baseURL: API_URL
});

export const login = async (param: ILoginform ) => {
    try {
        const res = await instance.post("/login", param);
        return res.data;
    } catch (error) {
        console.log("lỗi",error);
        throw error;
    }
};
export const getCompany = async()=>{
    try{
        const res =await instance.get("/company");
        return res.data;
    }catch(err){
        alert("err")
    }
}