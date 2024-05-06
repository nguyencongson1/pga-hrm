import { ConfigProvider, Tag, TagProps } from "antd";
import s from "./index.module.scss";
interface ITagGloabalProps extends TagProps {
  label: string;
  type?: string;
}
function TagGlobal({ type, label, ...props }: ITagGloabalProps) {
  let tagTheme = {};

  switch (type) {
    case "active":
      tagTheme = {
        defaultBg: "rgb(0, 145, 255)",
        defaultColor: "rgb(251, 253, 255)",
      };
      break;
    case "deni":
      tagTheme = {
        defaultBg: "rgb(255, 239, 239)",
        defaultColor: "rgb(229, 72, 77)",
      };
      break;
    case "deni_choose":
      tagTheme = {
        defaultBg: "rgb(229, 72, 77)",
        defaultColor: "#fff",
      };
      break;
    default:
      tagTheme = {
        defaultBg: "rgb(237, 246, 255)",
        defaultColor: "rgb(0, 145, 255)",
      };
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Tag: tagTheme,
        },
      }}
    >
      <Tag {...props} className={`${s.tag_custom} ${props.className}`}>
        {" "}
        {label}
      </Tag>
    </ConfigProvider>
  );
}
export { TagGlobal };
