import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ChowStatus from './components/ChowStatus';
import ReportLocation from './components/ReportLocation';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Homepage />} />
              <Route path="chowstatus" element={<ChowStatus />} />
              <Route path="chowlocation" element={<ReportLocation />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
