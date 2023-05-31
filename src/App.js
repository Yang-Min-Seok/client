import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Teams from "./pages/teams";
import Share from "./pages/share";
import Upload from "./pages/upload";
import Gather from "./pages/gather";
import Show from "./pages/show";
import Create from "./pages/create";
import Vote from "./pages/vote";
import Result from "./pages/result";
import Name from "./pages/name";
import Waiting from "./pages/waiting";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}></Route>
          <Route path={`/teams`} element={<Teams />}></Route>
          <Route path={`/share`} element={<Share />}></Route>
          <Route path={`/upload/:teamName/:memberId`} element={<Upload />}></Route>
          <Route path={`/gather/:teamName`} element={<Gather />}></Route>
          <Route path={`/show/:teamName`} element={<Show />}></Route>
          <Route path={`/create/:teamName`} element={<Create />}></Route>
          <Route path={`/vote/:teamName`} element={<Vote />}></Route>
          <Route path={`/result`} element={<Result />}></Route>
          <Route path={`/name/:teamName`} element={<Name />}></Route>
          <Route path={`/waiting/:teamName`} element={<Waiting />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;