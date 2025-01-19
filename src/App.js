import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home/home';
import IndividualWorkTheory from './pages/individual-work-theory/individual-work-theory';
import IndividualWorkTest from "./pages/individual-work-test/individual-work-test";
import ControlWorkTheory from "./pages/control-work-theory/control-work-theory";
import ControlWorkTest from './pages/control-work-test/control-work-test';
import TopicsPage from "./pages/topics/topics";
import {Provider} from "./components/ui/provider"

function App() {
    return (
        <div className="App">
            <Provider>
                <Router basename="/math-problem-book">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/topics" element={<TopicsPage/>}/>
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
