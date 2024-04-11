import { Form } from "antd";
import s from "./SalaryWage.module.scss";
import { InputSearchGlobal } from "../../components/InputGlobal";

export default function SalaryWage() {
  return (
    <div className={s.salary_container}>
      <div className={s.salary_box}>
        <div className={s.first_map}>
          <div className={s.title}> Salary & Wages</div>
          <div className={s.required}>
            Required (<span className={s.red}>*</span>)
          </div>
        </div>
        <Form
          name="salary_form"
          labelCol={{ span: 6 }}
          className={s.salary_form}
        >
          <Form.Item
            label="Basic Salary"
            colon={false}
            name="basic_salary"
            labelAlign="left"
            required
            className={s.label_detail}
          >
            <InputSearchGlobal width={250} type="number" prefix="Rp" />
          </Form.Item>
          <Form.Item
            label="Basic Salary (Audit)"
            colon={false}
            name="audit_salary"
            className={s.label_detail}
            labelAlign="left"
            required
          >
            <InputSearchGlobal width={250} type="number" prefix="Rp" />
          </Form.Item>
          <Form.Item
            label="Safety Insurance Amount"
            colon={false}
            name="safety_amount"
            className={s.label_detail}
            labelAlign="left"
            required
          >
            <InputSearchGlobal width={250} type="number" prefix="Rp" />
          </Form.Item>
          <Form.Item
            label="Health Insurance Amount"
            colon={false}
            name="health_amount"
            labelAlign="left"
            required
            className={s.label_detail}
          >
            <InputSearchGlobal width={250} type="number" prefix="Rp" />
          </Form.Item>
          <Form.Item
            label="Meal Allowance"
            colon={false}
            name="meal_allowance"
            labelAlign="left"
            required
            className={s.label_detail}
          >
            <InputSearchGlobal width={250} type="number" prefix="Rp" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
