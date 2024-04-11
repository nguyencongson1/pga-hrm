import {
  Button,
  ConfigProvider,
  Form,
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
import { IDocumentInfo } from "../../interface";

export default function Other() {
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

  return (
    <div className={s.other_container}>
      <div className={s.other_box}>
        <div className={s.first_map}>
          <div className={s.title}> Others</div>
          <div className={s.required}>
            Required (<span className={s.red}>*</span>)
          </div>
        </div>
        <Form name="other_form" labelCol={{ span: 6 }} className={s.other_form}>
          <Form.Item
            label="Grade"
            colon={false}
            name="grade"
            labelAlign="left"
            required
            className={s.label_detail}
          >
            <SelectGlobal width={250} />
          </Form.Item>
          <Form.Item
            label="Benefit"
            colon={false}
            name="benefit"
            className={s.label_detail}
            labelAlign="left"
            required
          >
            <SelectGlobal width={250} />
          </Form.Item>
          <Form.Item
            label="Remark"
            colon={false}
            name="remark"
            className={s.label_detail}
            labelAlign="left"
            required
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            label="HRM User Account"
            colon={false}
            name="user_account"
            labelAlign="left"
            required
            className={s.label_detail}
          >
            <SelectGlobal width={250} />
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
}
