import Nok from "./NOK.png";
import "./IndividualWorkTheory.css";

import Header from "../Header/Header";

function IndividualWorkTheory() {
  return (
    <div className="IndividualWorkTheory">
      <h1>
        <p align="center">
          Самостоятельная работа по теме нахождение наименьшего общего кратного
        </p>
      </h1>
	  
      <Header />

      <table border="1" className="margin-25" bgcolor="#FFFFFF">
        <th align="left">
          <img src={Nok} />
        </th>
      </table>
    </div>
  );
}

export default IndividualWorkTheory;
