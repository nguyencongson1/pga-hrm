import { InputSearchGlobal } from "../../../components/InputGlobal";
import s from "./ChangePassword.module.scss";
import logo from "../../../assets/images/Rectangle 4.png";
import { Button, Form } from "antd";
export default function ChangePasswordPage() {
  const onFinish = () => {
    console.log("value");
  };
  return (
    <div className={s.login_container}>
      <div className={s.login_form}>
        <div className={s.title_box}>
          <img src={logo} alt="anh logo" />
          <div className={s.title_system}>HR Management System</div>
          <div className={s.title_system}>Sign In</div>
        </div>
        <Form
          name="signin"
          onFinish={onFinish}
          autoComplete="off"
          className={s.form_box}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <div className={s.title_form}>Please input password</div>
          <Form.Item
            label=" New Password :"
            name="newPassword"
            style={{ width: 300 }}
            colon={true}
            className={s.form_item}
          >
            <InputSearchGlobal width={300} />
          </Form.Item>
          <Form.Item
            label="Confirm Password :"
            name="confirmPassword"
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
