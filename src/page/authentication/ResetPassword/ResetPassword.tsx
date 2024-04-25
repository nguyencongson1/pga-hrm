import { InputSearchGlobal } from "../../../components/InputGlobal";
import s from "./ResetPassword.module.scss";
import logo from "../../../assets/images/Rectangle 4.png";
import { Button, Form } from "antd";
import { resetPassword } from "../../../service/api-service";
import { IParamForgot } from "../../../interface";
export default function ResetPasswordPage() {
  const onFinish = (value: IParamForgot) => {
    resetPassword(value).then((res) => {
      if (res.result === true) {
        console.log("ok");
      }
    });
  };
  return (
    <div className={s.login_container}>
      <div className={s.login_form}>
        <div className={s.title_box}>
          <img src={logo} alt="anh logo" />
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
            label=" New Password "
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
            <Button type="primary" htmlType="submit" className={s.signin_btn}>
              Confirm
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
