import { SearchOutlined } from "@ant-design/icons";
import { InputSearchGlobal } from "../../components/InputGlobal";
import { Header } from "../../layout/Header/Header";
import SideBar from "../../layout/SideBar/SideBar";
import s from "./EmployInfo.module.scss";
import { ButtonGlobal } from "../../components/ButtonGlobal";
import { ConfigProvider, Table, TableColumnsType } from "antd";
import { IEmployManagement } from "../../interface";

export default function EmployInfo() {
  const columns: TableColumnsType<IEmployManagement> = [
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "NIK",
      dataIndex: "nik",
      key: "nik",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Card Number",
      dataIndex: "card_number",
      key: "card_number",
    },
    {
      title: "Account Number",
      dataIndex: "acc_number",
      key: "acc_number",
    },
    {
      title: "Family Card No ",
      dataIndex: "card_no",
      key: "card_no",
    },
    {
      title: "Marriage Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Mother Name",
      dataIndex: "mother_name",
      key: "mother_name",
    },
    {
      title: "Place and Date birth",
      dataIndex: "place_birthday",
      key: "place_birthday",
    },
  ];
  const data: IEmployManagement[] = [
    {
      id: 1,
      gender: "qqqq",
      nik: "A1534",
      name: "Alex",
      card_number: "123456",
      acc_number: "123123123",
      card_no: "_",
      status: "K2",
      mother_name: "Sunary",
      place_birthday: "aasda",
    },
    {
      id: 2,
      gender: "qqqqqq",
      nik: "A15a34",
      name: "Aleax",
      card_number: "1231456",
      acc_number: "1231231123",
      card_no: "_",
      status: "Kq2",
      mother_name: "Sunaryqq",
      place_birthday: "aasdqqqa",
    },
    {
      id: 3,
      gender: "qqqqa",
      nik: "A15a34",
      name: "Aleax",
      card_number: "1234a56",
      acc_number: "12312a3123",
      card_no: "a_",
      status: "Ka2",
      mother_name: "Sunaary",
      place_birthday: "aasada",
    },
  ];
  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: IEmployManagement[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <div className={s.employInfo_container}>
      <Header />
      <div className={s.content_employ}>
        <SideBar />
        <div className={s.content_container}>
          <div className={s.content_box}>
            <div>{`General > Employee Management`}</div>
            <div className={s.title_box}>
              <div className={s.title_name}>Employee Management</div>
              <InputSearchGlobal
                width={200}
                prefix={<SearchOutlined className={s.search_icon} />}
                placeholder="Search ..."
                className={s.input_custom}
              />
            </div>
            <div className={s.table_box}>
              <div className={s.button}>
                <ButtonGlobal>Delete</ButtonGlobal>
                <ButtonGlobal>Add</ButtonGlobal>
              </div>
              <div className={s.content_table}>
                <ConfigProvider
                  theme={{
                    components: {
                      Table: {
                        headerBg: "rgb(236, 238, 240)",
                        rowHoverBg: "rgb(237, 246, 255)",
                      },
                    },
                  }}
                >
                  <Table
                    columns={columns}
                    dataSource={data.map((item) => ({ ...item, key: item.id }))}
                    rowSelection={rowSelection}
                    className={s.table_employ}
                    rowClassName={s.row_employ}
                  />
                </ConfigProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
