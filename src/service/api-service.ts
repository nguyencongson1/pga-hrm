import axios from "axios";
import { API_URL } from "../config/api-config";
import { IDeleteId, ILoginform, IParamAdd, IParamEmploy } from "../interface";

const instance = axios.create({
    baseURL: API_URL
});
const configAuthen={Authorization:`Bearer ${ localStorage.getItem("token")}` }
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
export const getEmploy = async(param:IParamEmploy)=>{
    try{
        const token = localStorage.getItem("token")
        if(token){
            const config={
                Authorization:`Bearer ${token}` 
            }
            const res= await instance.get("/employee", {params: param , headers:config })
            return res.data;
        }return {};
    }catch(error){
        console.log(error);
        throw error;
    }
}
export const deleteEmploy =async(param:IDeleteId)=>{
    try{
        const res=await instance.delete("employee/multiple-delete",{data: param , headers:configAuthen})
        return res.data;
    }catch(err){
        console.log("err",err);
        throw err;
    }
}
export const createEmploy= async(param:IParamAdd)=>{
    try{
        const res=await instance.post("/employee",{data: param , headers:configAuthen})
        return res.data;
    }catch(err){
        console.log("err",err);
        throw err;
    }
}