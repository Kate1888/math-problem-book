import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import IndividualWorkTheory from './pages/individual-work-theory/individual-work-theory';
import IndividualWorkTest from "./pages/individual-work-test/individual-work-test";
import ControlWorkTheory from "./pages/control-work-theory/control-work-theory";
import ControlWorkTest from './pages/control-work-test/control-work-test';
import {Provider} from "./components/ui/provider"

function App() {
    return (
        <div className="App">
            <Provider>
                <Router>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/individual-work/:id" element={<IndividualWorkTheory/>}/>
                        <Route path="/individual-work/:id/test" element={<IndividualWorkTest/>}/>
                        <Route path="/control-work/:id" element={<ControlWorkTheory/>}/>
                        <Route path="/control-work/:id/test" element={<ControlWorkTest/>}/>
                    </Routes>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
