import { ActionEmploy } from "../page/ActionEmploy/ActionEmploy"
import EmployInfo from "../page/Employ/EmployInfo"
import ChangePasswordPage from "../page/authentication/ChangePassword/ChangePassword"
import  ForgotPasswordPage  from "../page/authentication/ForgotPassword/ForgotPassword"
import LoginPage from "../page/authentication/Login/Login"
import ResetPasswordPage from "../page/authentication/ResetPassword/ResetPassword"




const publicRoutes=[
    {path:"/" ,element: LoginPage},
    {path:"/change-password", element: ChangePasswordPage},
    {path:"/forgot-password", element: ForgotPasswordPage },
    {path:"/reset-password", element: ResetPasswordPage},
]
const privateRoutes=[
    {path:"/employ-info", element: EmployInfo},
    {path:"/employ-action/:id",element: ActionEmploy},
    {path:"/employ-action",element: ActionEmploy},
]
export {publicRoutes , privateRoutes }