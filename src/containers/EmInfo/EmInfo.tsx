import { Formik } from "formik";
import s from "./EmInfo.module.scss";
import { DatePicker, Form, Space } from "antd";
import { InputSearchGlobal } from "../../components/InputGlobal";
import { SelectGlobal } from "../../components/SelectGlobal";
import { IEmployInfomation } from "../../interface";

export default function EmInfo() {
  const handleSubmitForm = (e: IEmployInfomation) => {
    console.log("object", e);
  };
  return (
    <div className={s.eminfo_container}>
      <div className={s.eminfo_box}>
        <div className={s.first_map}>
          <div className={s.title}> Personal Information</div>
          <div className={s.required}>
            Required (<span className={s.red}>*</span>)
          </div>
        </div>
        <Formik
          initialValues={{}}
          onSubmit={(value) => handleSubmitForm(value)}
        >
          <Form
            onFinish={() => onsubmit}
            className={s.form_eminfo}
            labelCol={{ span: 9 }}
          >
            <Space direction="vertical">
              <Form.Item label="NIK" name="nik" labelAlign="left">
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item label="Name" name="name" labelAlign="left" required>
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
                labelAlign="left"
                required
              >
                <SelectGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Mother Name"
                labelAlign="left"
                name="mother_name"
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item label="Date of birth" labelAlign="left" name="date">
                <DatePicker style={{ height: "46px" }} />
              </Form.Item>
              <Form.Item label="KTP No." labelAlign="left" name="ktp" required>
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="National Card ID"
                labelAlign="left"
                name="card_id"
                required
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Home Address 1"
                labelAlign="left"
                name="home_add1"
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Home Address 2"
                labelAlign="left"
                name="home_add2"
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
            </Space>
            <Space direction="vertical">
              <Form.Item
                label="Mobile No."
                labelAlign="left"
                name="card_number"
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item label="Tel No." name="tel" labelAlign="left">
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Marriage Status"
                name="status"
                labelAlign="left"
              >
                <SelectGlobal width={240} />
              </Form.Item>
              <Form.Item label="Bank Card No." name="card_no" labelAlign="left">
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Bank Account No."
                name="acc_number"
                labelAlign="left"
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Family Card Number "
                name="family_number"
                labelAlign="left"
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Safety Insurance No. "
                name="safety"
                labelAlign="left"
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
              <Form.Item
                label="Health Insurance No.  "
                name="health"
                labelAlign="left"
              >
                <InputSearchGlobal width={240} />
              </Form.Item>
            </Space>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
