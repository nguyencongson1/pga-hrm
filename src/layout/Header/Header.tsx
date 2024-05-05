import s from "./Header.module.scss";
import logo from "../../assets/images/Rectangle 4.png";
import logo1 from "../../assets/images/eng.png";
import logo2 from "../../assets/images/indo.png";
import { Avatar, ConfigProvider, Popover, Select } from "antd";
export function Header() {
  const optionLanguage = [
    {
      value: 1,
      label: (
        <div>
          <img src={logo1} alt="anh logo" width={12} height={12} />
          <span style={{ marginLeft: "8px" }}>EN</span>
        </div>
      ),
    },
    {
      value: 2,
      label: (
        <div>
          <img src={logo2} alt="anh logo" width={12} height={12} />
          <span style={{ marginLeft: "8px" }}>BA</span>
        </div>
      ),
    },
  ];
  const title = (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Avatar size="large" style={{ backgroundColor: "rgb(219 223 227)" }}>
        a
      </Avatar>
      <div style={{ fontSize: "24px" }}>admin_test1</div>
    </div>
  );
  return (
    <div className={s.header_container}>
      <div className={s.left_side}>
        <img src={logo} alt="anh logo" width={36} height={36} />
        <div className={s.title_text}>HR Management System</div>
      </div>
      <div className={s.right_side}>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: "rgb(219 223 227)",
              },
            },
          }}
        >
          <Select
            className={s.language}
            options={optionLanguage}
            defaultValue={1}
          />
        </ConfigProvider>
        <div>
          <Popover
            placement="bottomRight"
            title={title}
            content={<div>aaaa</div>}
          >
            <Avatar
              size="large"
              style={{ backgroundColor: "rgb(219 223 227)" }}
            >
              {" "}
              a
            </Avatar>
          </Popover>
        </div>
      </div>
    </div>
  );
}
