import {Link, useParams} from "react-router-dom";
import "./headers.css";

function ControlWorkHeader() {
    let params = useParams();

    let theoryLink = '/control-work/' + params.id;
    let testLink = '/control-work/' + params.id + '/test';

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

export default ControlWorkHeader;