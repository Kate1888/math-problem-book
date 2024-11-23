import "./ControlWorkTheory.css";
import getControlWork from "../../data/controlWorks/works";
import getIndividualWorks from "../../data/individualWorks/works";

import Header from "../Headers/ControlWorkHeader";
import { Link, useParams } from "react-router-dom";

function ControlWorkTheory() {
  let params = useParams();
  let workData = getControlWork(params.id);
  let individualWorks = getIndividualWorks(workData.individualWorks);
  let individualWorkThemes = individualWorks.map((individualWork) => 
    <li><Link to={`/individual-work/${individualWork.id}`}><h3>{individualWork.theme}</h3></Link></li>);

  return (
    <div className="IndividualWorkTheory">
      <h1>
        <p align="center">
          {workData.theme}
        </p>
      </h1>
	  
      <Header />

      <ul>{individualWorkThemes}</ul>
    </div>
  );
}

export default ControlWorkTheory;