import s from "./Header.module.scss";
import logo from "../../assets/images/Rectangle 4.png";
import { SelectGlobal } from "../../components/SelectGlobal";
export function Header() {
  return (
    <div className={s.header_container}>
      <div className={s.left_side}>
        <img src={logo} alt="anh logo" width={36} height={36} />
        <div className={s.title_text}>HR Management System</div>
      </div>
      <div className={s.right_side}>
        <SelectGlobal width={150} />
        <div>
          <img src={logo} width={28} height={28} />
        </div>
      </div>
    </div>
  );
}
