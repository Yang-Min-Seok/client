import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Teams from "./pages/teams";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/teams`} element={<Teams />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;