import s from "./EmInfo.module.scss";
import React from "react";
import { DatePicker, Form, FormProps, Space } from "antd";
import { InputSearchGlobal } from "../../components/InputGlobal";
import { SelectGlobal } from "../../components/SelectGlobal";
import { IResMirrage } from "../../interface";
import { useEffect, useState } from "react";
import { getMarriage } from "../../service/api-service";
import { storeRedux } from "../../redux/store-redux";
import dayjs from "dayjs";

export const EmInfo: React.FC<FormProps> = (props) => {
  const [call, setCall] = useState<boolean>(true);
  // const [init, setInit] = useState<boolean>(true);
  const [optionMirri, setOptionMirri] = useState([]);
  // const [init, setInit] = useState<IParamAdd>({});
  const handleChooseMirriage = () => {
    setCall(!call);
  };
  useEffect(() => {
    getMarriage().then((res) => {
      if (res.result === true) {
        const newMirriageList = res.data.map((item: IResMirrage) => ({
          label: item.name,
          value: item.id,
        }));
        setOptionMirri(newMirriageList);
        // setInit(!init)
      }
    });
  }, [call]);
  // console.log("aaa", storeRedux.getState().employInfo);
  useEffect(() => {
    const dobValue = storeRedux.getState().employInfo.dob; // Giả sử đây là giá trị dob từ storeRedux
    const dobAsDayjs = dayjs(dobValue);
    props.form?.setFieldsValue({
      name: storeRedux.getState().employInfo.name,
      gender: storeRedux.getState().employInfo.gender,
      mother_name: storeRedux.getState().employInfo.mother_name,
      pob: storeRedux.getState().employInfo.pob,
      // dob: formatDate(storeRedux.getState().employInfo.dob),
      dob: dobAsDayjs,
      ktp_no: storeRedux.getState().employInfo.ktp_no,
      card_number: storeRedux.getState().employInfo.card_number,
      home_address_1: storeRedux.getState().employInfo.home_address_1,
      home_address_2: storeRedux.getState().employInfo.home_address_2,
      mobile_no: storeRedux.getState().employInfo.mobile_no,
      tel_no: storeRedux.getState().employInfo.tel_no,
      marriage_id: storeRedux.getState().employInfo.marriage_id,
      bank_account_no: storeRedux.getState().employInfo.bank_account_no,
      bank_name: storeRedux.getState().employInfo.bank_name,
      family_card_number: storeRedux.getState().employInfo.family_card_number,
      safety_insurance_no: storeRedux.getState().employInfo.safety_insurance_no,
      health_insurance_no: storeRedux.getState().employInfo.health_insurance_no,
    });
  }, [optionMirri]);
  return (
    <div className={s.eminfo_container}>
      <div className={s.eminfo_box}>
        <div className={s.first_map}>
          <div className={s.title}> Personal Information</div>
          <div className={s.required}>
            Required (<span className={s.red}>*</span>)
          </div>
        </div>
        <Form {...props} className={s.form_eminfo} labelCol={{ span: 10 }}>
          <Space direction="vertical">
            <Form.Item
              label="Name"
              name="name"
              labelAlign="left"
              required
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              labelAlign="left"
              required
              className={s.label_form}
            >
              <SelectGlobal
                width={240}
                placeholder="Choose Gender"
                options={[
                  {
                    value: 0,
                    label: "Male",
                  },
                  {
                    value: 1,
                    label: "Female",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Mother Name"
              labelAlign="left"
              name="mother_name"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Date of birth"
              labelAlign="left"
              name="dob"
              className={s.label_form}
              required
            >
              <DatePicker style={{ height: "46px", width: "240px" }} />
            </Form.Item>
            <Form.Item
              label="Place of birth"
              labelAlign="left"
              name="pob"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="KTP No."
              labelAlign="left"
              name="ktp_no"
              required
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="National Card ID"
              labelAlign="left"
              name="card_number"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Home Address 1"
              labelAlign="left"
              name="home_address_1"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Home Address 2"
              labelAlign="left"
              name="home_address_2"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
          </Space>
          <Space direction="vertical">
            <Form.Item
              label="Mobile No."
              labelAlign="left"
              name="mobile_no"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Tel No."
              name="tel_no"
              labelAlign="left"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Marriage Status"
              name="marriage_id"
              labelAlign="left"
              className={s.label_form}
            >
              <SelectGlobal
                width={240}
                onClick={handleChooseMirriage}
                options={optionMirri}
              />
            </Form.Item>
            <Form.Item
              label="Bank Card No."
              name="card_no"
              labelAlign="left"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Bank Account No."
              name="bank_account_no"
              labelAlign="left"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Bank Name"
              name="bank_name"
              labelAlign="left"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Family Card Number "
              name="family_card_number"
              labelAlign="left"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Safety Insurance No"
              name="safety_insurance_no"
              labelAlign="left"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
            <Form.Item
              label="Health Insurance No"
              name="health_insurance_no"
              labelAlign="left"
              className={s.label_form}
            >
              <InputSearchGlobal width={240} />
            </Form.Item>
          </Space>
        </Form>
      </div>
    </div>
  );
};
