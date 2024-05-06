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
import { useNavigate, useParams } from "react-router-dom";
import { setInfoEmploy, storeRedux } from "../../redux/store-redux";

export function ActionEmploy() {
  const [typeTab, setTypeTab] = useState("emInfo");
  const [checked, setChecked] = useState<boolean>(true);
  const [validateEmInfo, setValidateEmInfo] = useState<boolean>(true);
  const [validateContractInfo, setValidateContractInfo] =
    useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(true);
  const navigate = useNavigate();
  const params = useParams();
  const keybtn = params;
  const [form] = Form.useForm();
  useEffect(() => {
    const param_btn = form.getFieldsValue(true);
    if (
      param_btn.name !== "" &&
      param_btn.gender !== "" &&
      param_btn.dob !== "" &&
      param_btn.ktp_no !== "" &&
      param_btn.contract_start_date !== "" &&
      param_btn.type !== ""
    ) {
      setChecked(false);
    } else {
      setChecked(true);
    }
    if (
      param_btn.name !== "" &&
      param_btn.gender !== "" &&
      param_btn.dob !== "" &&
      param_btn.ktp_no !== ""
    ) {
      setValidateEmInfo(false);
    } else {
      setValidateEmInfo(true);
    }
    if (param_btn.contract_start_date && param_btn.type) {
      setValidateContractInfo(false);
    } else {
      setValidateContractInfo(true);
    }
  }, [typeTab, form, refresh]);
  const handleAdd = async () => {
    const param = form.getFieldsValue(true);
    try {
      const res = await createEmploy(param);
      if (res.result === true) {
        message.success("thêm thành công");
        navigate("/employ-info");
      }
    } catch (err) {
      message.error("loi");
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
      navigate("/employ-info");
    }
  };

  const handleChange = (e: string) => {
    setTypeTab(e);
    setRefresh(!refresh);
  };
  const tabItem = [
    {
      label: (
        <TagGlobal
          label="Employee Infomation"
          type={(() => {
            if (typeTab === "emInfo" && validateEmInfo === false) {
              return "active";
            } else if (typeTab === "emInfo" && validateEmInfo === true) {
              return "deni_choose";
            } else if (validateEmInfo === true) {
              return "deni";
            }
            return "";
          })()}
        />
      ),
      key: "emInfo",
      children: <EmInfo form={form} />,
    },
    {
      label: (
        <TagGlobal
          label=" Contract Infomation"
          type={(() => {
            if (typeTab === "contractInfo" && validateContractInfo === false) {
              return "active";
            } else if (
              typeTab === "contractInfo" &&
              validateContractInfo === true
            ) {
              return "deni_choose";
            } else if (validateContractInfo === true) {
              return "deni";
            }
            return "";
          })()}
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
    if (keybtn.id) {
      getEmployee().then((res) => {
        if (res.result === true) {
          storeRedux.dispatch(setInfoEmploy(res?.data));
        }
      });
    }
  }, []);
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
                disabled={checked}
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
                <Tabs items={tabItem} onTabClick={handleChange} />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
