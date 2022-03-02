import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ChowStatus from './components/ChowStatus';
import ChowClasses from './components/ChowClasses';
import ReportLocation from './components/ReportLocation';
import ChowMap from './components/ChowMap';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
// import 'bootstrap/dist/css/bootstrap.min.css'; // TODO: Remove


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
              <Route path="chowclasses" element={<ChowClasses />} />
              <Route path="chowlocation" element={<ReportLocation />} />
              <Route path="chowmap" element={<ChowMap />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
