import {
  Button,
  ConfigProvider,
  Form,
  FormProps,
  Table,
  TableColumnsType,
  Tag,
} from "antd";
import s from "./Other.module.scss";
import { SelectGlobal } from "../../components/SelectGlobal";
import TextArea from "antd/es/input/TextArea";
import {
  DeleteOutlined,
  DownloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { IDocumentInfo, IResGrade } from "../../interface";
import { useEffect, useState } from "react";
import { getBenefit, getGrade } from "../../service/api-service";

export const Other: React.FC<FormProps> = (props) => {
  const [optionGrade, setOptionGrade] = useState([]);
  const [optionBenefit, setOptionBenefit] = useState([]);
  const [idSelect, setIdSelect] = useState({
    grade_id: 1,
  });
  const [value, setValue] = useState(undefined);
  const column: TableColumnsType<IDocumentInfo> = [
    {
      title: "No",
      dataIndex: "no",
      width: 60,
      render: (_, record) => <div>{record.no}</div>,
    },
    {
      title: "Document Name",
      dataIndex: "document_name",
    },
    {
      title: "Created At",
      dataIndex: "create_at",
      key: "create_at",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="action_table">
          <Tag color="green">
            <DownloadOutlined />
          </Tag>
          <Tag color="red">
            <DeleteOutlined />
          </Tag>
        </div>
      ),
    },
  ];
  const data: IDocumentInfo[] = [
    {
      no: 1,
      document_name: "son",
      create_at: "22/2/2022",
    },
  ];
  useEffect(() => {
    getGrade().then((res) => {
      if (res.result === true) {
        const newGradeList = res.data.map((item: IResGrade) => ({
          label: item.name,
          value: item.id,
        }));
        setOptionGrade(newGradeList);
      }
    });
  }, []);
  useEffect(() => {
    getBenefit(idSelect).then((res) => {
      if (res.result === true) {
        const newBenefitList = res.data.map((item: IResGrade) => ({
          label: item.name,
          value: item.id,
        }));
        setOptionBenefit(newBenefitList);
        setValue(undefined);
      }
    });
  }, [idSelect]);
  const handleChangeGrade = () => {
    const newParam = props.form?.getFieldValue("grade_id");
    setIdSelect({ grade_id: newParam });
    setValue(undefined);
    // console.log("dddddddd", idSelect);
  };
  return (
    <div className={s.other_container}>
      <div className={s.other_box}>
        <div className={s.first_map}>
          <div className={s.title}> Others</div>
          <div className={s.required}>
            Required (<span className={s.red}>*</span>)
          </div>
        </div>
        <Form
          name="other_form"
          labelCol={{ span: 6 }}
          className={s.other_form}
          {...props}
        >
          <Form.Item
            label="Grade"
            colon={false}
            name="grade_id"
            labelAlign="left"
            className={s.label_detail}
          >
            <SelectGlobal
              width={350}
              options={optionGrade}
              onChange={handleChangeGrade}
            />
          </Form.Item>
          <Form.Item
            label="Benefit"
            colon={false}
            name="benefit"
            className={s.label_detail}
            labelAlign="left"
          >
            <SelectGlobal
              width={350}
              style={{ maxWidth: "1000px" }}
              options={optionBenefit}
              value={value}
              mode="multiple"
              maxTagCount={1}
            />
          </Form.Item>
          <Form.Item
            label="Remark"
            colon={false}
            name="remark"
            className={s.label_detail}
            labelAlign="left"
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            label="HRM User Account"
            colon={false}
            name="user_account"
            labelAlign="left"
            className={s.label_detail}
          >
            <SelectGlobal width={350} disabled />
          </Form.Item>
        </Form>
        <div className={s.last_map}>
          <div className={s.title_other}>
            <div>Document :</div>
            <Button className={s.upload_btn}>
              {" "}
              <UploadOutlined /> Upload
            </Button>
          </div>
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
            <Table columns={column} dataSource={data} />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};
