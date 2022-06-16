import './App.css';

import Registration from './Components/Registration/Registration';
// import SignIn from './Components/SignIn/SignIn';

import MainNavbar from './Components/MainNavbar/MainNavbar';
import MainPage from './Components/MainPage/MainPage';


function App() {
  return (
    <div className="App">

      <Registration />

      <MainNavbar />
      <MainPage />
    </div>
  );
}

export default App;
