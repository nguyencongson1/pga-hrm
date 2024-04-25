import s from "./ForgotPassword.module.scss";
import logo from "../../../assets/images/Rectangle 4.png";
import { Button, Form } from "antd";
import { InputSearchGlobal } from "../../../components/InputGlobal";
import { forgotPassword } from "../../../service/api-service";
import { IParamForgot } from "../../../interface";
import { useNavigate } from "react-router-dom";
export default function ForgotPasswordPage() {
  const onFinish = (value: IParamForgot) => {
    console.log("object");
    forgotPassword(value).then((res) => {
      if (res.result === true) {
        navigate("/");
      }
    });
  };
  const handleBack = () => {
    console.log("object");
  };
  const navigate = useNavigate();
  return (
    <div className={s.login_container}>
      <div className={s.login_form}>
        <div className={s.title_box}>
          <img src={logo} alt="anh logo" />
          <div className={s.title_system} style={{ marginBottom: "40px" }}>
            HR Management System
          </div>
          <div className={s.title_system}> Forgot Password</div>
        </div>
        <Form
          name="signin"
          onFinish={onFinish}
          autoComplete="off"
          className={s.form_box}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item
            label="Your work email"
            name="email"
            style={{ width: 300 }}
            colon={true}
            className={s.form_item}
          >
            <InputSearchGlobal width={300} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={s.signin_btn}>
              Confirm & Send OTP
            </Button>
          </Form.Item>
          <div className={s.text_forget} onClick={handleBack}>
            Back to Sign In
          </div>
        </Form>
      </div>
    </div>
  );
}
