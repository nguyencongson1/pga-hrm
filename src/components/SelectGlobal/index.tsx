import { Select, SelectProps } from "antd";
import s from "./index.module.scss";
interface ISelectGlobalProps extends SelectProps {
  width?: number;
  height?: number;
}
function SelectGlobal({ width, height = 46, ...props }: ISelectGlobalProps) {
  return (
    <Select
      allowClear
      {...props}
      className={`${s.select_btn} ${props.className}`}
      style={{ width: width, height: height }}
    />
  );
}
export { SelectGlobal };
