import { ConfigProvider, Form, Tabs, message } from "antd";
import { ButtonGlobal } from "../../components/ButtonGlobal";
import { Header } from "../../layout/Header/Header";
import SideBar from "../../layout/SideBar/SideBar";
import s from "./ActionEmploy.module.scss";
import { EmInfo } from "../../containers/EmInfo/EmInfo";
import { TagGlobal } from "../../components/TagGlobal";
import { ContractInfo } from "../../containers/ContractInfo/ContractInfo";
import { useEffect, useState } from "react";
import { EmDetail } from "../../containers/EmDetail/EmDetail";
import { SalaryWage } from "../../containers/SalaryWage/SalaryWage";
import { Other } from "../../containers/Other/Other";
import {
  createEmploy,
  getEmployee,
  updateEmployee,
} from "../../service/api-service";
// import { convertDateFormatCross } from "../../utils/hooks/changeDate";
import { useNavigate, useParams } from "react-router-dom";
// import { IParamAdd } from "../../interface";
import { setInfoEmploy, storeRedux } from "../../redux/store-redux";
// import { convertDateFormatCross } from "../../utils/hooks/changeDate";

export function ActionEmploy() {
  const [typeTab, setTypeTab] = useState("emInfo");
  const navigate = useNavigate();
  const [getField, setGetField] = useState<boolean>(true);

  const params = useParams();
  const keybtn = params;
  console.log("aaaaaa", keybtn);
  const handleAdd = async () => {
    setGetField(!getField);
    const param = form.getFieldsValue(true);
    try {
      const res = await createEmploy(param);
      if (res.result === true) {
        message.success("thêm thành công");
        navigate("/employ-info");
      }
    } catch (err) {
      message.error("loi");
      // throw err;
      navigate("/employ-info");
    }
  };
  const handleEdit = async () => {
    const param = form.getFieldsValue(true);
    try {
      const res = await updateEmployee(param);
      if (res.result === true) {
        message.success("Sửa thành công");
        navigate("/employ-info");
      }
    } catch (err) {
      message.error("loi");
      // throw err;
      navigate("/employ-info");
    }
  };
  const [form] = Form.useForm();
  const handleChange = (e: string) => {
    setTypeTab(e);
  };
  const tabItem = [
    {
      label: (
        <TagGlobal
          label="Employee Infomation"
          type={typeTab == "emInfo" ? "active" : ""}
        />
      ),
      key: "emInfo",
      children: <EmInfo form={form} />,
    },
    {
      label: (
        <TagGlobal
          label=" Contract Infomation"
          type={typeTab == "contractInfo" ? "active" : ""}
        />
      ),
      key: "contractInfo",
      children: <ContractInfo form={form} />,
    },
    {
      label: (
        <TagGlobal
          label="Employment Details"
          type={typeTab == "emDetail" ? "active" : ""}
        />
      ),
      key: "emDetail",
      children: <EmDetail form={form} />,
    },
    {
      label: (
        <TagGlobal
          label="Salary & Wages"
          type={typeTab == "salary" ? "active" : ""}
        />
      ),
      key: "salary",
      children: <SalaryWage form={form} />,
    },
    {
      label: (
        <TagGlobal label="Other" type={typeTab == "other" ? "active" : ""} />
      ),
      key: "other",
      children: <Other form={form} />,
    },
  ];
  useEffect(() => {
    getEmployee().then((res) => {
      // const parts = window.location.href.split("/");
      // const id = parts[parts.length - 1];
      // console.log("id la", id);
      if (res.result === true) {
        // setDataEmpoyee(res.data);
        storeRedux.dispatch(setInfoEmploy(res?.data));
      }
      // console.log("thanh cong", res.data);
    });
  }, []);
  // useEffect(() => {
  //   const parts = window.location.href.split("/");
  //   setKeybtn(parts[parts.length - 1]);
  // }, []);
  return (
    <div className={s.employInfo_container}>
      <Header />
      <div className={s.content_employ}>
        <SideBar />
        <div className={s.content_container}>
          <div className={s.content_box}>
            <div>{`General > Employee Management > Add new employee`}</div>
            <div className={s.title_box}>
              <div className={s.title_name}>Employee Management</div>
              <ButtonGlobal
                className={s.add_btn}
                onClick={keybtn.id ? handleEdit : handleAdd}
                disabled={false}
              >
                {keybtn.id ? "Save Change" : "Add"}
              </ButtonGlobal>
            </div>
            <div className={s.tab_box}>
              <ConfigProvider
                theme={{
                  components: {
                    Tabs: {
                      itemSelectedColor: "#ffff",
                      cardPadding: "0px",
                      cardHeight: 80,
                      inkBarColor: "rgb(241, 243, 245)",
                      horizontalItemGutter: 0,
                    },
                  },
                }}
              >
                <Tabs
                  items={tabItem}
                  onTabClick={handleChange}
                  // defaultActiveKey="other"
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
