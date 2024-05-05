import axios from "axios";
import { API_URL } from "../config/api-config";
import { IDeleteId, ILoginform, IParamAdd, IParamEmploy, IParamForgot } from "../interface";
// import { convertDateFormatCross } from "../utils/hooks/changeDate";

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
        const res=await instance.post("/employee",param,{headers:configAuthen})
        return res.data;
    }catch(err){
        console.log("err",err);
        throw err;  
    }
}
export const getMarriage= async()=>{
    try{
        const res=await instance.get("/marriage",{ headers:configAuthen})
        return res.data;
    }catch(err){
        console.log("err",err);
        throw err;
    }
}
export const getDepartment= async()=>{
    try{
        const res=await instance.get("/department",{ headers:configAuthen})
        return res.data;
    }catch(err){
        console.log("err",err);
        throw err;
    }
}
export const getPosition= async()=>{
    try{
        const res=await instance.get("/position",{ headers:configAuthen})
        return res.data;
    }catch(err){
        console.log("err",err);
        throw err;
    }
}
export const forgotPassword=async(param:IParamForgot)=>{
    try{
        const res=await instance.post("/forgot-password",param);
        return res.data
    }catch(err){
        console.log("lỗi",err);
        throw err
    }
}
export const resetPassword =async(param:IParamForgot)=>{
    try{
        const urlSearchParams = new URLSearchParams(window.location.search);
        const token = urlSearchParams.get('token');
        const email = urlSearchParams.get('email');
        const company_id=urlSearchParams.get('company_id');
        const updatedParam: IParamForgot = {
            ...param,
            "token": token || '', 
            "email": email || '',
            "company_id":company_id || ''
        };
        const res=await instance.post("/reset-password",updatedParam);
        return res.data
    }catch(err){
        console.log("loix",err);
        throw err;
    }
}
export const getEmployee =async()=>{
    try{
        const parts = window.location.href.split("/");
        const id = parts[parts.length - 1];
        const res=await instance.get(`/employee/${id}`,{headers:configAuthen})
        return res.data
    }catch(err){
        console.log("loi");
        throw err
    }
}
export const updateEmployee =async(param:IParamAdd)=>{
    try{
        const parts = window.location.href.split("/");
        const id = parts[parts.length - 1];
        const res=await instance.put(`/employee/${id}`,param,{headers:configAuthen})
        return res.data
    }catch(err){
        console.log("loi");
        throw err
    }
}
export const getGrade =async()=>{
    try{
        const res= await instance.get("grade",{headers: configAuthen})
        return res.data
    }catch(err){
        console.log("loi");
        throw err
    }
}
export const getBenefit =async(param:{grade_id:number})=>{
    try{
        const res =await instance.get("benefit",{params:param,headers: configAuthen})
        return res.data
    }catch(err){
        console.log("loi");
        throw err;
    }
}