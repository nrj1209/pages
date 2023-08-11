
// import Plywood from "./pages/plywood/Plywood";
import Timber from "./pages/timber/Timber";
import Plywood from './pages/plywood/Plywood'
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
     <>
      <Routes>
        <Route path='/' element={<Plywood/>} />
        <Route path='/plywood' element={<Plywood/>} />
        <Route path='/timber' element={<Timber/>} />
      </Routes>
    </>
  );
}

export default App;
