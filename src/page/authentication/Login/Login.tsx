import { InputSearchGlobal } from "../../../components/InputGlobal";
import s from "./Login.module.scss";
import logo from "../../../assets/images/Rectangle 4.png";
import { Button, Form } from "antd";
import { SelectGlobal } from "../../../components/SelectGlobal";
export default function LoginPage() {
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
          <Form.Item
            label="Username :"
            name="Username"
            style={{ width: 300 }}
            colon={true}
            className={s.form_item}
          >
            <InputSearchGlobal width={300} />
          </Form.Item>
          <Form.Item
            label="Password :"
            name="Password"
            style={{ width: 300 }}
            colon={true}
            className={s.form_item}
          >
            <InputSearchGlobal width={300} />
          </Form.Item>
          <Form.Item
            label="Factory"
            name="factory"
            colon={true}
            className={s.form_item}
          >
            <SelectGlobal />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={s.signin_btn}>
              Sign In
            </Button>
          </Form.Item>
          <div className={s.text_forget}>Forgot Your Password?</div>
        </Form>
      </div>
    </div>
  );
}
