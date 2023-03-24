import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Teams from "./pages/teams";
import Share from "./pages/share";
import Upload from "./pages/upload";
import Gather from "./pages/gather"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/teams`} element={<Teams />}></Route>
          <Route path={`/share`} element={<Share />}></Route>
          <Route path={`/upload`} element={<Upload />}></Route>
          <Route path={`/gather`} element={<Gather />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;