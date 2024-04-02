import { Header } from "../../layout/Header/Header";
import SideBar from "../../layout/SideBar/SideBar";
import s from "./EmployInfo.module.scss";

export default function EmployInfo() {
  return (
    <div className={s.employInfo_container}>
      <Header />
      <div className={s.content_employ}>
        <SideBar />
        <div className={s.content_box}></div>
      </div>
    </div>
  );
}
