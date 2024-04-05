import { Button, ButtonProps } from "antd";

function ButtonGlobal({ size = "large", ...props }: ButtonProps) {
  return (
    <Button
      className={`ant-search-global ${props.className}`}
      size={size}
      style={{ height: "46px" }}
      {...props}
    />
  );
}
export { ButtonGlobal };
