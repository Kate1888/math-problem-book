import "./individual-work-theory.css";
import getIndividualWorks from "../../data/individual-works/works";

import Header from "../headers/individual-work-header";
import { useParams } from "react-router-dom";

function IndividualWorkTheory() {

  let params = useParams();
  let workData = getIndividualWorks([params.id])[0];

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
          <img src={workData.theoryImage} />
        </th>
      </table>
    </div>
  );
}

export default IndividualWorkTheory;
