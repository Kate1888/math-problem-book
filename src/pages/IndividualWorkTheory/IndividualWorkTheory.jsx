import "./IndividualWorkTheory.css";
import getIndividualWork from "../../individualWorksData/individualWorks";

import Header from "../Header/Header";
import { useParams } from "react-router-dom";

function IndividualWorkTheory() {

  let params = useParams();
  let workData = getIndividualWork(params.id);

  return (
    <div className="IndividualWorkTheory">
      <h1>
        <p align="center">
          {workData.theme}
        </p>
      </h1>
	  
      <Header />

      <table border="1" className="margin-25" bgcolor="#FFFFFF">
        <th align="left">
          <img src={workData.image} />
        </th>
      </table>
    </div>
  );
}

export default IndividualWorkTheory;
