import { ActionEmploy } from "../page/ActionEmploy/ActionEmploy"
import EmployInfo from "../page/Employ/EmployInfo"
import ChangePasswordPage from "../page/authentication/ChangePassword/ChangePassword"
import LoginPage from "../page/authentication/Login/Login"




const publicRoutes=[
    {path:"/" ,element: LoginPage},
    {path:"/change-password", element: ChangePasswordPage},
    {path:"/employ-info", element: EmployInfo},
    {path:"/employ-action",element: ActionEmploy},
]
const privateRoutes=[
    {path:"/" ,element: LoginPage},
]
export {publicRoutes , privateRoutes }