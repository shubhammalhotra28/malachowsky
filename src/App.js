import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ChowStatus from './components/ChowStatus';
import ChowMap from './components/ChowMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route path="chowstatus" element={<ChowStatus />} />
              <Route path="chowmap" element={<ChowMap />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
