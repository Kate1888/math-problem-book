import {Link, useParams} from "react-router-dom";
import "./Headers.css";

function IndividualWorkHeader() {
    let params = useParams();

    let theoryLink = '/individual-work/' + params.id;
    let testLink = '/individual-work/' + params.id + '/test';

  return (
    <div className="Header">
      <Link to="/">&#8592; Оглавление</Link>
      <div className="links">
        <Link to={theoryLink}>Теория</Link>
        <Link to={testLink}>Тренажер</Link>
      </div>
    </div>
  );
}

export default IndividualWorkHeader;
