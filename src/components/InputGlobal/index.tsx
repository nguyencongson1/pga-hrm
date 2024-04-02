import { Input, InputProps } from "antd";

function InputSearchGlobal({ width, height = 46, ...props }: InputProps) {
  return (
    <Input
      className={`ant-search-global ${props.className}`}
      style={{ width: width, height: height }}
      allowClear
      {...props}
    />
  );
}
export { InputSearchGlobal };
