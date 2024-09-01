import { Link } from "react-router-dom";
import "./Header.css";
import MainPage from "../MainPage/MainPage";
import IndividualWorkTheory from "../IndividualWorkTheory/IndividualWorkTheory";
import IndividualWorkTest from "../IndividualWorkTest/IndividualWorkTest";

function Header() {
  return (
    <div className="Header">
      <Link to={MainPage}>&#8592; Оглавление</Link>
      <div className="links">
        <Link to={IndividualWorkTheory}>Теория</Link>
        <Link to={IndividualWorkTest}>Тренажер</Link>
      </div>
    </div>
  );
}

export default Header;
