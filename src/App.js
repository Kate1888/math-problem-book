import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage'; 
import IndividualWorkTheory from './pages/IndividualWorkTheory/IndividualWorkTheory';
import IndividualWorkTest from "./pages/IndividualWorkTest/IndividualWorkTest";
import ControlWorkTheory from "./pages/ControlWorkTheory/ControlWorkTheory";
import ControlWorkTest from './pages/ControlWorkTest/ControlWorkTest';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/individual-work/:id" element={<IndividualWorkTheory/>} />
                <Route path="/individual-work/:id/test" element={<IndividualWorkTest/>} />
                <Route path="/control-work/:id" element={<ControlWorkTheory/>} />
                <Route path="/control-work/:id/test" element={<ControlWorkTest/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
