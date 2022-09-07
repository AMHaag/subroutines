import './App.css';
import Navbar from './components/Navbar/Navbar'
// import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Login/> */}
      <SignUp/>
    </div>
  );
}

export default App;
