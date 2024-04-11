


export interface IEmployManagement{
    id?:number;
    gender?:string;
    nik?:string;
    name?:string;
    card_number?:string;
    acc_number?:string;
    card_no?:string;
    status?:string;
    mother_name?:string;
    place_birthday?:string;
    
}
export interface IEmployInfomation extends IEmployManagement{
    date?:string;
    ktp?:string;
    card_id?:string;
    home_add1?:string;
    home_add2?:string;
    tel?:string;
    family_number?:string;
    safety?:string;
    health?:string;
}
export interface IContractInfo {
    no?:number;
    contract_name?:string;
    sign_date?:string;
}
export interface IDocumentInfo{
    no?:number;
    document_name?:string;
    create_at?:string;
}