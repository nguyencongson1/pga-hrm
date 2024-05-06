import { ConfigProvider, Modal, message } from "antd";
import { ButtonGlobal } from "../../components/ButtonGlobal";
import { logOut } from "../../service/api-service";
import s from "./Logout.module.scss";
import { clearItem } from "../../utils/storage-utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleLog = () => {
    setIsModalOpen(true);
  };
  const handleChangePass = () => {
    navigate("/change-password");
  };
  const handleOk = () => {
    logOut().then((res) => {
      if (res.result === true) {
        message.success("sign out complete");
        clearItem("token");
        navigate("/");
      }
    });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              titleFontSize: 26,
            },
          },
        }}
      >
        <Modal
          title="Sign out"
          open={isModalOpen}
          onOk={handleOk}
          cancelText="NO"
          okText="YES"
          onCancel={handleCancel}
        >
          <div style={{ fontSize: "20px" }}>
            Are you sure you want to sign out?
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};
