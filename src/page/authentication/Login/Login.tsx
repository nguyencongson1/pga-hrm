import { InputSearchGlobal } from "../../../components/InputGlobal";
import s from "./Login.module.scss";
import logo from "../../../assets/images/Rectangle 4.png";
import { Button, Form, message } from "antd";
import { SelectGlobal } from "../../../components/SelectGlobal";
import { ICompany, ILoginform } from "../../../interface";
import { getCompany, login } from "../../../service/api-service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../../utils/storage-utils";

export interface IOptionCompany {
  label: string;
  value: number;
}
export default function LoginPage() {
  const navigate = useNavigate();
  const [company, setCompany] = useState<IOptionCompany[]>([]);
  const onFinish = (value: ILoginform) => {
    login(value).then((res) => {
      if (res.result === true) {
        navigate("/employ-info");
        setItem("token", res.data.token);
        message.success("login success");
      } else {
        message.error("something went wrong please try again ");
      }
    });
  };
  const handleSelect = () => {
    getCompany().then((res) => {
      if (res.result === true) {
        const newCompanyList = res.data.map((item: ICompany) => ({
          label: item.name,
          value: item.id,
        }));
        setCompany(newCompanyList);
      }
    });
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
            name="username"
            style={{ width: 300 }}
            colon={true}
            className={s.form_item}
            rules={[
              { required: true, message: "Please enter username" },
              { max: 30, message: "Username must be at most 30 characters" },
            ]}
          >
            <InputSearchGlobal width={300} />
          </Form.Item>
          <Form.Item
            label="Password :"
            name="password"
            style={{ width: 300 }}
            colon={true}
            className={s.form_item}
            rules={[
              { required: true, message: "Please enter password" },
              {
                min: 8,
                max: 16,
                message: "Password must be between 8 and 16 characters",
              },
            ]}
          >
            <InputSearchGlobal width={300} type="password" />
          </Form.Item>
          <Form.Item
            label="Factory"
            name="company_id"
            colon={true}
            className={s.form_item}
          >
            <SelectGlobal options={company} onClick={handleSelect} />
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
