import { Checkbox, ConfigProvider, Form, FormProps } from "antd";
import s from "./EmDetail.module.scss";
import { SelectGlobal } from "../../components/SelectGlobal";
import { useEffect, useState } from "react";
import { getDepartment, getPosition } from "../../service/api-service";
import { IResMirrage } from "../../interface";
export const EmDetail: React.FC<FormProps> = (props) => {
  const [checkbox, setCheckbox] = useState<boolean>(true);
  const [refreshSelect, setRefreshSelect] = useState<boolean>(false);
  const [optionDepartment, setOptionDepartment] = useState([]);
  const [optionPosition, setOptionPosition] = useState([]);
  useEffect(() => {
    getDepartment().then((res) => {
      if (res.result === true) {
        const newDepartmentList = res.data.map((item: IResMirrage) => ({
          label: item.name,
          value: item.id,
        }));
        setOptionDepartment(newDepartmentList);
      }
    });

    getPosition().then((res) => {
      if (res.result === true) {
        const newPositionList = res.data.map((item: IResMirrage) => ({
          label: item.name,
          value: item.id,
        }));
        setOptionPosition(newPositionList);
      }
    });
  }, [refreshSelect]);
  const handleSelectDepartment = () => {
    setRefreshSelect(!refreshSelect);
  };
  const handleSelectPosition = () => {
    setRefreshSelect(!refreshSelect);
  };
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
            entitle_ot: false,
            meal_allowance_paid: false,
            hidden_on_payroll: "0",
          }}
        >
          <Form.Item
            label="Department"
            colon={false}
            name="department_id"
            labelAlign="left"
            className={s.label_detail}
          >
            <SelectGlobal
              width={250}
              options={optionDepartment}
              onClick={handleSelectDepartment}
            />
          </Form.Item>
          <Form.Item
            label="Position"
            colon={false}
            name="position_id"
            className={s.label_detail}
            labelAlign="left"
          >
            <SelectGlobal
              width={250}
              onClick={handleSelectPosition}
              options={optionPosition}
            />
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
              getValueFromEvent={(e) => (e.target.checked ? true : false)}
            >
              <Checkbox onChange={(e) => setCheckbox(!e.target.checked)}>
                Entitled OT{" "}
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="meal_allowance_paid"
              className={s.checkbox_item}
              valuePropName="checked"
              // getValueFromEvent={(e) => (e.target.checked ? 1 : 0)}
            >
              <Checkbox>Meal Allowance Paid </Checkbox>
            </Form.Item>
            <Form.Item
              name="hidden_on_payroll"
              className={s.checkbox_item}
              // valuePropName="checked"
              getValueFromEvent={(e) => (e.target.checked ? "1" : "0")}
            >
              <Checkbox>Hidden on payroll </Checkbox>
            </Form.Item>
            <Form.Item
              name="operational_allowance_paid"
              className={s.checkbox_item}
              // valuePropName="checked"
              // getValueFromEvent={(e) => (e.target.checked ? true : false)}
            >
              <Checkbox
                disabled
                checked={checkbox}
                name="operational_allowance_paid"
              >
                Operational Allowance Paid{" "}
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="attendance_allowance_paid"
              className={s.checkbox_item}
              // valuePropName="checked"
              // getValueFromEvent={(e) => (e.target.checked ? true : false)}
            >
              <Checkbox
                name="attendance_allowance_paid"
                disabled
                checked={checkbox}
              >
                Attendance Allowance Paid{" "}
              </Checkbox>
            </Form.Item>
          </ConfigProvider>
        </Form>
      </div>
    </div>
  );
};
