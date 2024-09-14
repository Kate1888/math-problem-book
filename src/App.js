import MainPage from './pages/MainPage/MainPage'; 
import IndividualWorkTheory from './pages/IndividualWorkTheory/IndividualWorkTheory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndividualWorkTest from "./pages/IndividualWorkTest/IndividualWorkTest";

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/individual-work/:id" element={<IndividualWorkTheory/>} />
                <Route path="/individual-work/:id/test" element={<IndividualWorkTest/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
