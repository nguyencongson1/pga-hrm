import { Checkbox, ConfigProvider, Form, FormProps } from "antd";
import s from "./EmDetail.module.scss";
import { SelectGlobal } from "../../components/SelectGlobal";
export const EmDetail: React.FC<FormProps> = (props) => {
  return (
    <div className={s.detail_container}>
      <div className={s.detail_box}>
        <div className={s.first_map}>
          <div className={s.title}> Employment Details</div>
          <div className={s.required}>
            Required (<span className={s.red}>*</span>)
          </div>
        </div>
        <Form
          name="detail_form"
          {...props}
          labelCol={{ span: 4 }}
          className={s.detail_form}
          initialValues={{
            entitle_ot: 0,
            meal_allowance_paid: 0,
            hidden_on_payroll: "0",
            operational_allowance_paid: 0,
            attendance_allowance_paid: 0,
          }}
        >
          <Form.Item
            label="Department"
            colon={false}
            name="department"
            labelAlign="left"
            className={s.label_detail}
          >
            <SelectGlobal width={250} />
          </Form.Item>
          <Form.Item
            label="Position"
            colon={false}
            name="type"
            className={s.label_detail}
            labelAlign="left"
          >
            <SelectGlobal width={250} />
          </Form.Item>
          <Form.Item
            label="Shift"
            colon={false}
            name="shift"
            className={s.label_detail}
            labelAlign="left"
          >
            <SelectGlobal width={250} />
          </Form.Item>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "green",
                fontSize: 16,
                fontFamily: "SVN-Sofia Pro Regular",
              },
            }}
          >
            <Form.Item
              name="entitle_ot"
              className={s.checkbox_item}
              valuePropName="checked"
              getValueFromEvent={(e) => (e.target.checked ? 1 : 0)}
            >
              <Checkbox>Entitled OT </Checkbox>
            </Form.Item>
            <Form.Item
              name="meal_allowance_paid"
              className={s.checkbox_item}
              valuePropName="checked"
              getValueFromEvent={(e) => (e.target.checked ? 1 : 0)}
            >
              <Checkbox>Meal Allowance Paid </Checkbox>
            </Form.Item>
            <Form.Item
              name="hidden_on_payroll"
              className={s.checkbox_item}
              valuePropName="checked"
              getValueFromEvent={(e) => (e.target.checked ? "1" : "0")}
            >
              <Checkbox>Hidden on payroll </Checkbox>
            </Form.Item>
            <Form.Item
              name="operational_allowance_paid"
              className={s.checkbox_item}
              valuePropName="checked"
              getValueFromEvent={(e) => (e.target.checked ? 1 : 0)}
            >
              <Checkbox disabled checked>
                Operational Allowance Paid{" "}
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="attendance_allowance_paid"
              className={s.checkbox_item}
              valuePropName="checked"
              getValueFromEvent={(e) => (e.target.checked ? 1 : 0)}
            >
              <Checkbox disabled checked>
                Attendance Allowance Paid{" "}
              </Checkbox>
            </Form.Item>
          </ConfigProvider>
        </Form>
      </div>
    </div>
  );
};
