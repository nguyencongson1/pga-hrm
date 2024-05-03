import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { InputSearchGlobal } from "../../components/InputGlobal";
import { Header } from "../../layout/Header/Header";
import SideBar from "../../layout/SideBar/SideBar";
import s from "./EmployInfo.module.scss";
import { ButtonGlobal } from "../../components/ButtonGlobal";
import { ConfigProvider, Table, TableColumnsType, message } from "antd";
import { IEmployManagement, IParamEmploy } from "../../interface";
import { useNavigate } from "react-router-dom";
import plusImg from "../../assets/images/file-plus.png";
import { useEffect, useState } from "react";
import { deleteEmploy, getEmploy } from "../../service/api-service";
import { useDebounce } from "../../utils/hooks/useDebounce";
import { convertDateFormat } from "../../utils/hooks/changeDate";
import { setIdEmploy, storeRedux } from "../../redux/store-redux";

export default function EmployInfo() {
  const [param, setParam] = useState<IParamEmploy>({
    search: "",
    page: 1,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<IEmployManagement[]>([]);
  const [idDelete, setIdDelete] = useState<React.Key[]>([]);
  const [isDiable, setIsDiable] = useState<boolean>(true);
  const [refersh, setRefresh] = useState<boolean>(false);
  const navigate = useNavigate();
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const columns: TableColumnsType<IEmployManagement> = [
    {
      title: "NIK",
      dataIndex: "staff_id",
      key: "staff_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (_, record) => {
        return record?.gender === 1 ? <div>Female</div> : <div>Male</div>;
      },
    },
    {
      title: "Marriage Status",
      dataIndex: "marriage_code",
      key: "marriage_code",
    },
    {
      title: "Mother Name",
      dataIndex: "mother_name",
      key: "mother_name",
    },
    {
      title: "Tax ID",
      dataIndex: "nc_id",
      key: "nc_id",
    },
    {
      title: "Date Start",
      dataIndex: "created_at",
      render: (_, record) => {
        if (record?.created_at) {
          const time = convertDateFormat(record?.created_at);
          return <div>{time}</div>;
        }
        return <div>--</div>;
      },
    },
    {
      title: "Department",
      dataIndex: "department_name",
      key: "department_name",
    },
    {
      title: "Position",
      dataIndex: "position_name",
      key: "position_name",
    },
    {
      title: "KTP No ",
      dataIndex: "ktp_no",
      key: "ktp_no",
    },
    {
      title: "Mobile No",
      dataIndex: "mobile_no",
      key: "mobile_no",
    },
    {
      title: "Tel No",
      dataIndex: "tel_no",
      key: "tel_no",
    },
    {
      title: "Entitled OT",
      dataIndex: "entitle_ot",
      render: (_, record) => {
        return record?.entitle_ot === 1 ? <div>Yes</div> : <div>No</div>;
      },
    },
    {
      title: "Resigned",
      dataIndex: "resign_reason",
      key: "resign_reason",
    },
    {
      title: "Grading",
      dataIndex: "grade_name",
      key: "grade_name",
    },
    {
      title: "Old NIK",
      dataIndex: "old_staff_id",
      key: "old_staff_id",
    },
  ];
  // const data: IEmployManagement[] = [
  //   {
  //     id: 1,
  //     gender: "qqqq",
  //     nik: "A1534",
  //     name: "Alex",
  //     card_number: "123456",
  //     acc_number: "123123123",
  //     card_no: "_",
  //     status: "K2",
  //     mother_name: "Sunary",
  //     place_birthday: "aasda",
  //   },
  //   {
  //     id: 2,
  //     gender: "qqqqqq",
  //     nik: "A15a34",
  //     name: "Aleax",
  //     card_number: "1231456",
  //     acc_number: "1231231123",
  //     card_no: "_",
  //     status: "Kq2",
  //     mother_name: "Sunaryqq",
  //     place_birthday: "aasdqqqa",
  //   },
  //   {
  //     id: 3,
  //     gender: "qqqqa",
  //     nik: "A15a34",
  //     name: "Aleax",
  //     card_number: "1234a56",
  //     acc_number: "12312a3123",
  //     card_no: "a_",
  //     status: "Ka2",
  //     mother_name: "Sunaary",
  //     place_birthday: "aasada",
  //   },
  // ];
  useEffect(() => {
    setParam((prev) => ({ ...prev, search: debouncedSearchTerm }));
  }, [debouncedSearchTerm]);

  useEffect(() => {
    getEmploy(param).then((res) => {
      if (res.result === true) {
        setData(res.data.data);
      }
    });
  }, [param, refersh]);
  const handleAdd = () => {
    navigate("/employ-action");
  };
  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[]
      // selectedRows: IEmployManagement[]
    ) => {
      setIdDelete(selectedRowKeys);
      selectedRowKeys.length === 0 ? setIsDiable(true) : setIsDiable(false);
    },
  };
  const handleDelete = () => {
    deleteEmploy({ record_ids: idDelete }).then((res) => {
      if (res.result === true) {
        message.success("xoas thanhf cong");
        setRefresh(!refersh);
      }
    });
  };
  const handleCLickDetail = (id: number | undefined) => {
    storeRedux.dispatch(setIdEmploy(id));
    navigate(`/employ-action/${id}`);
    // console.log("redux", storeRedux.getState().employId);
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
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
            <div className={s.table_box}>
              <div className={s.button}>
                <ButtonGlobal
                  className={s.delete_btn}
                  disabled={isDiable}
                  onClick={handleDelete}
                >
                  <DeleteOutlined /> Delete
                </ButtonGlobal>
                <ButtonGlobal className={s.add_btn} onClick={handleAdd}>
                  <img src={plusImg} /> Add
                </ButtonGlobal>
              </div>
              <div className={s.content_table}>
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
                      key: item.id,
                    }))}
                    rowSelection={rowSelection}
                    className={s.table_employ}
                    rowClassName={s.row_employ}
                    scroll={{ x: "2000px" }}
                    onRow={(record) => ({
                      onDoubleClick: () => {
                        handleCLickDetail(record?.id);
                      },
                    })}
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
