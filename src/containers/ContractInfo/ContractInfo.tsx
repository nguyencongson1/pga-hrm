import {
  ConfigProvider,
  DatePicker,
  Form,
  FormProps,
  Table,
  TableColumnsType,
  Tag,
} from "antd";

import s from "./ContractInfo.module.scss";
import { SelectGlobal } from "../../components/SelectGlobal";
import { InputSearchGlobal } from "../../components/InputGlobal";
import { ButtonGlobal } from "../../components/ButtonGlobal";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { IContractInfo } from "../../interface";
import moment from "moment";
import { useEffect } from "react";
import { storeRedux } from "../../redux/store-redux";

interface CustomDatePickerProps {
  value: string | null;
  onChange?: (date: string | null | string[]) => void;
}
export const ContractInfo: React.FC<FormProps> = (props) => {
  const columns: TableColumnsType<IContractInfo> = [
    {
      title: "No",
      dataIndex: "no",
      width: 60,
      render: (_, record) => <div>{record.no}</div>,
    },
    {
      title: "Contract Name",
      dataIndex: "contract_name",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="action_table">
          <Tag color="red">
            {" "}
            <DeleteOutlined style={{ marginRight: "10px" }} />
            Delete
          </Tag>
        </div>
      ),
    },
  ];
  const data: IContractInfo[] = [
    {
      no: 1,
      contract_name: "son",
    },
  ];
  const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    value,
    onChange,
  }) => (
    <DatePicker
      value={value ? moment(value, "YYYY-MM-DD") : null}
      format="YYYY-MM-DD"
      onChange={(_, dateString: string | string[]) => {
        onChange?.(dateString);
      }}
      style={{ height: "46px", width: "250px" }}
    />
  );
  useEffect(() => {
    props.form?.setFieldsValue({
      contract_start_date: storeRedux.getState().employInfo.contract_start_date,
      type: storeRedux.getState().employInfo.type,
    });
  }, []);
  return (
    <div className={s.contract_container}>
      <div className={s.contract_box}>
        <div className={s.first_map}>
          <div className={s.title}> Contract Information</div>
          <div className={s.required}>
            Required (<span className={s.red}>*</span>)
          </div>
        </div>
        <Form
          name="contract_form"
          labelCol={{ span: 4 }}
          className={s.contract_form}
          {...props}
        >
          <Form.Item
            label="Date Start"
            colon={false}
            name="contract_start_date"
            labelAlign="left"
            className={s.label_contract}
          >
            <CustomDatePicker value={null} onChange={() => {}} />
          </Form.Item>
          <Form.Item
            label="Employee Type"
            colon={false}
            name="type"
            className={s.label_contract}
            labelAlign="left"
          >
            <SelectGlobal
              width={250}
              options={[
                {
                  value: "0",
                  label: "Permanent",
                },
                {
                  value: "1",
                  label: "Part-time worker",
                },
                {
                  value: "2",
                  label: "Contract worker",
                },
              ]}
            />
          </Form.Item>
        </Form>
        <div className={s.last_map}>
          <div className={s.title_contract}>
            <div>CONTRACT :</div>
            <div>Please upload pdf, png, xlsx, docx file format!</div>
          </div>
          <div className={s.contract_content}>
            <Form
              name="left-form"
              className={s.left_side}
              labelCol={{ span: 10 }}
            >
              <Form.Item
                name="contract_date"
                label="Contract Date"
                colon={false}
                className={s.label_contract}
                labelAlign="left"
              >
                <DatePicker style={{ height: "46px", width: "150px" }} />
              </Form.Item>
              <Form.Item
                name="contract_name"
                label="Contract Name"
                colon={false}
                className={s.label_contract}
                labelAlign="left"
              >
                <InputSearchGlobal width={150} />
              </Form.Item>
              <Form.Item className={s.sb_btn}>
                <ButtonGlobal className={s.upload_btn}>
                  <UploadOutlined />
                  Upload File
                </ButtonGlobal>
                <ButtonGlobal htmlType="submit" className={s.add_btn}>
                  Add
                </ButtonGlobal>
              </Form.Item>
            </Form>
            <div className={s.right_side}>
              <ConfigProvider
                theme={{
                  components: {
                    Table: {
                      headerBg: "rgb(236, 238, 240)",
                      rowHoverBg: "rgb(237, 246, 255)",
                      cellPaddingBlock: 10,
                    },
                  },
                }}
              >
                <Table
                  columns={columns}
                  dataSource={data?.map((item) => ({
                    ...item,
                    key: item.no,
                  }))}
                  scroll={{ y: "5000px" }}
                  pagination={false}
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
