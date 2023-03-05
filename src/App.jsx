import { BlockView } from './views/block-view';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { InitalView } from './views/initial-view';
import { SellRegister } from './views/sell-view';
import { SellResume } from './views/sell-resume';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BlockView/>}/>
        <Route path='/initalView' element={<InitalView/>}/>
        <Route path='/sell' element={<SellRegister/>}/>
        <Route path='/resume' element={<SellResume/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;