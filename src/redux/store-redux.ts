import { createStore } from "redux";
import { IEmploy } from "../interface";
interface IAction{
    type?:string;
    payload?:any;
}
const initialValue ={
    userToken:"",
    default:"",
    employInfo:[]
}
const reducerRedux=(state =initialValue,action:IAction)=>{
    switch( action.type){
        case "SET_TOKEN_USER":
            return { ...state, userToken: action.payload };
        case "SET_INFO_EMPLYEE":
            return{...state,employInfo: action.payload}
        default :
            return state;
    }
}
export const storeRedux= createStore(reducerRedux)
export const setToken=(payload:string)=>{
    return{
        type: "SET_TOKEN_USER",
        payload
    }
}
export const setEmployCard=(payload:IEmploy[])=>{
    return{
        type: "SET_INFO_EMPLYEE",
        payload
    }
}
