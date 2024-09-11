import NewLoan from './Pages/NewLoan';
import CloseLoan from './Pages/CloseLoan';
import FindLoan from './Pages/FindLoan';
import FindBorrower from './Pages/FindBorrower';
import Home from './Pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newLoan" element={<NewLoan />} />
          <Route path="/findLoan" element={<FindLoan />} />
          <Route path="/findBorrower" element={<FindBorrower />} />
          <Route path="/closeLoan" element={<CloseLoan />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
