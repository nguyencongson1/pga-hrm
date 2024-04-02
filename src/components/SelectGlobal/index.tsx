import { Select, SelectProps } from "antd";

interface ISelectGlobalProps extends SelectProps {
  width?: number;
  height?: number;
}
function SelectGlobal({ width, height = 46, ...props }: ISelectGlobalProps) {
  return (
    <Select
      allowClear
      {...props}
      className={`ant-select-global ${props.className}`}
      style={{ width: width, height: height }}
    />
  );
}
export { SelectGlobal };
