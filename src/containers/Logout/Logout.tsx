import { message } from "antd";
import { ButtonGlobal } from "../../components/ButtonGlobal";
import { logOut } from "../../service/api-service";
import s from "./Logout.module.scss";
import { clearItem } from "../../utils/storage-utils";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  const navigate = useNavigate();
  const handleLog = () => {
    logOut().then((res) => {
      if (res.result === true) {
        message.success("sign out complete");
        clearItem("token");
        navigate("/");
      }
    });
  };
  const handleChangePass = () => {
    navigate("/change-password");
  };
  return (
    <div className={s.log_container}>
      <div className={s.text_staff}>Staff ID:</div>
      <ButtonGlobal type="primary" className={s.log_btn} onClick={handleLog}>
        Sign Out
      </ButtonGlobal>
      <div className={s.reset_pw} onClick={handleChangePass}>
        Reset Password
      </div>
    </div>
  );
};
