import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import ActiveRoutines from './components/pages/ActiveRoutines';
import ArchivedRoutines from './components/pages/ArchivedRoutines';
import ScheduledRoutines from './components/pages/ScheduledRoutines';
import Settings from './components/pages/Settings';
import Welcome from './components/pages/Welcome';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />}>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='active' element={<ActiveRoutines />} />
            <Route path='archive' element={<ArchivedRoutines />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
