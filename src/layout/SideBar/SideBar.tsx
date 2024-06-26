import s from "./SideBar.module.scss";
import employImg from "../../assets/images/data-2.png";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const itemSide = [
    {
      icon: employImg,
      title: "Employee Management",
    },
  ];
  return (
    <div className={s.sidebar_container}>
      <div className={s.gen_box}>
        <div className={s.gen_title}>General</div>
        {itemSide.map((item, index) => {
          return (
            <div key={index} className={s.content_box}>
              <img src={item.icon} />
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/employ-info")}
              >
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
