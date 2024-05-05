import { InputSearchGlobal } from "../../../components/InputGlobal";
import s from "./ChangePassword.module.scss";
// import logo from "../../../assets/images/Rectangle 4.png";
import { Button, Form, message } from "antd";
import { IParamForgot } from "../../../interface";
import { changePassword } from "../../../service/api-service";
import { Header } from "../../../layout/Header/Header";
import SideBar from "../../../layout/SideBar/SideBar";
export default function ChangePasswordPage() {
  const onFinish = (value: IParamForgot) => {
    changePassword(value).then((res) => {
      if (res.result === true) {
        message.success("change password success");
      }
    });
  };
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <div className={s.login_container} style={{ width: "85%" }}>
          <div className={s.login_form}>
            <div className={s.title_box}>
              {/* <img src={logo} alt="anh logo" /> */}
              <div className={s.title_system}>HR Management System</div>
            </div>
            <Form
              name="signin"
              onFinish={onFinish}
              autoComplete="off"
              className={s.form_box}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <div className={s.title_form}>Change password</div>
              <Form.Item
                label=" New Password :"
                name="password"
                style={{ width: 300 }}
                colon={true}
                className={s.form_item}
              >
                <InputSearchGlobal width={300} />
              </Form.Item>
              <Form.Item
                label="Confirm Password :"
                name="password_confirmation"
                style={{ width: 300 }}
                colon={true}
                className={s.form_item}
              >
                <InputSearchGlobal width={300} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={s.signin_btn}
                >
                  Confirm
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
}
