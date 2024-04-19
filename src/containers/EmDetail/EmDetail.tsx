import { Checkbox, ConfigProvider, Form, FormProps } from "antd";
import s from "./EmDetail.module.scss";
import { SelectGlobal } from "../../components/SelectGlobal";
export const EmDetail: React.FC<FormProps> = (props) => {
  const option = [
    { label: "Entitled OT", value: "entitled_ot" },
    { label: "Meal Allowance Paid", value: "meal_paid" },
    { label: "Hidden on payroll", value: "hidden" },
  ];
  // const disOption = [
  //   { label: "Operational Allowance Paid", value: "operational_paid" },
  //   { label: "Attendance Allowance Paid", value: "attendance_paid" },
  // ];
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
        </Form>
        <div className={s.check_box}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "green",
                fontSize: 16,
                fontFamily: "SVN-Sofia Pro Regular",
              },
            }}
          >
            <Checkbox.Group options={option} className={s.check_item} />
            {/* <Checkbox.Group
              options={disOption}
              disabled
              className={s.check_item}
            /> */}
            <div className={s.check_item}>
              <Checkbox disabled checked>
                Operational Allowance Paid{" "}
              </Checkbox>
              <Checkbox disabled checked>
                Attendance Allowance Paid{" "}
              </Checkbox>
            </div>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};
