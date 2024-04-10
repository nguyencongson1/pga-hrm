import { Input, InputProps } from "antd";
import s from "./index.module.scss";

function InputSearchGlobal({ width, height = 46, ...props }: InputProps) {
  return (
    <Input
      className={`${s.input_search} ${props.className}`}
      style={{ width: width, height: height }}
      allowClear
      {...props}
    />
  );
}
export { InputSearchGlobal };
