import Timber from "./pages/timber/Timber";
import Plywood from './pages/plywood/Plywood'
import { Route, Routes} from 'react-router-dom';
import Antiques from "./pages/antiques/Antiques";
import Thaella from "./pages/thaella/Thaella";
import Vinay from "./pages/vinay/Vinay";
// import Retail from "./pages/retail/Retail";
function App() {
  return (
     <>
      <Routes>
        <Route path='/' element={<Plywood/>} />
        <Route path='/plywood' element={<Plywood/>} />
        <Route path='/timber' element={<Timber/>} />
        <Route path='/antiques' element={<Antiques/>}/>
        <Route path='/thaella' element={<Thaella/>} />
        {/* <Route path='/thaella' element={<Retail/>} /> */}
        <Route path='/vinay' element={<Vinay/>} />
      </Routes>
    </>
  );
}

export default App;
