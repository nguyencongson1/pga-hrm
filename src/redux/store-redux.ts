import { createStore } from "redux";
import { IParamAdd } from "../interface";

interface IAction{
    type?:string;
    payload?:string | number |undefined | IParamAdd ;
}
const initialValue ={
    userToken:"",
    default:"",
    employId:0,
    employInfo:{
      name: "",
      gender: "",
      mother_name:"",
      pob:"",
      // dob: formatDate(storeRedux.getState().employInfo.dob),
      dob: undefined,
      ktp_no: "",
      card_number: "",
      home_address_1: "",
      home_address_2: "",
      mobile_no:"",
      tel_no:"",
      marriage_id:"",
      bank_account_no:"",
      bank_name:"",
      family_card_number:"",
      safety_insurance_no:"",
      health_insurance_no:"",
      contract_start_date:"",
      type:"",
      department:{
        id:0
      },
      position:{
        id:0
      }
    }
}
const reducerRedux=(state =initialValue,action:IAction)=>{
    switch( action.type){
        case "SET_TOKEN_USER":
            return { ...state, userToken: action.payload };
        case "SET_ID_EMPLOYEE":
            return{...state,employId: action.payload }
        case "SET_INFO_EMPLOYEE":
            return{...state,employInfo:action.payload}    
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
export const setIdEmploy=(payload:number|undefined)=>{
    return{
        type: "SET_ID_EMPLOYEE",
        payload
    }
}
export const setInfoEmploy=(payload:IParamAdd)=>{
    return{
        type:"SET_INFO_EMPLOYEE",
        payload
    }
}
