


export interface IEmployManagement{
    id?:number;
    staff_id?:string;
    name?:string;
    gender?:number;
    marriage_code?:string;
    mother_name?:string;
    nc_id?:string;
    created_at?:string;
    department_name?:string;
    position_name?:string;
    ktp_no?:string;
    mobile_no?:string;
    tel_no?:string;
    entitle_ot?:number;
    resign_reason?:string;
    grade_name?:string;
    old_staff_id?:string;
}
export interface IParamAdd extends IEmployManagement{
    home_address_1?:string;
    home_address_2?:string;
    type?:string;
    contract_start_date?:string;
    dob?:string;
    pob?:string;
    card_number?:string;
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
export interface ILoginform{
    username:string;
    password:string;
    company_id:number;
}

export interface ICompany{
    id:number;
    name:string;
    full_name:string;
    addrress:string;
    place:string;
    tel_no:string;
    mail:string;
    prefix:string;
    created_at:string;
    update_at:string;
}
export interface IParamEmploy{
    search?:string;
    page?:number;
}
export interface IDeleteId{
    record_ids:React.Key[];
}
export interface IResMirrage{
    id?:number;
    name?:string;
    code?:string;
    company_id?:number;
    create_at?:string;
    updated_at?:string;
}
export interface IParamForgot{
    email?:string;
    company_id?:string;
    token?:string;
    password?:string;
    password_confirmation ?:string;
}

