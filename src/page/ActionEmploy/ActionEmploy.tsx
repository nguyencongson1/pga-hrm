import { ConfigProvider, Tabs } from "antd";
import { ButtonGlobal } from "../../components/ButtonGlobal";
import { Header } from "../../layout/Header/Header";
import SideBar from "../../layout/SideBar/SideBar";
import s from "./ActionEmploy.module.scss";
import EmInfo from "../../containers/EmInfo/EmInfo";
import { TagGlobal } from "../../components/TagGlobal";
import ContractInfo from "../../containers/ContractInfo/ContractInfo";
import { useState } from "react";
import EmDetail from "../../containers/EmDetail/EmDetail";
import SalaryWage from "../../containers/SalaryWage/SalaryWage";
import Other from "../../containers/Other/Other";

export function ActionEmploy() {
  const [typeTab, setTypeTab] = useState("emInfo");
  const handleAdd = () => {
    console.log("add");
  };
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
      children: <EmInfo />,
    },
    {
      label: (
        <TagGlobal
          label=" Contract Infomation"
          type={typeTab == "contractInfo" ? "active" : ""}
        />
      ),
      key: "contractInfo",
      children: <ContractInfo />,
    },
    {
      label: (
        <TagGlobal
          label="Employment Details"
          type={typeTab == "emDetail" ? "active" : ""}
        />
      ),
      key: "emDetail",
      children: <EmDetail />,
    },
    {
      label: (
        <TagGlobal
          label="Salary & Wages"
          type={typeTab == "salary" ? "active" : ""}
        />
      ),
      key: "salary",
      children: <SalaryWage />,
    },
    {
      label: (
        <TagGlobal label="Other" type={typeTab == "other" ? "active" : ""} />
      ),
      key: "other",
      children: <Other />,
    },
  ];
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
              <ButtonGlobal className={s.add_btn} onClick={handleAdd} disabled>
                Add
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
