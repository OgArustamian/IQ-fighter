import './App.css';
import { Routes, Route } from 'react-router-dom';

import Registration from './Components/Registration/Registration';
import SignIn from './Components/SignIn/SignIn';

import MainNavbar from './Components/MainNavbar/MainNavbar';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <div className="App">

      <MainNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ladderboard" element />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/profile/:id" element />
        <Route path="/game/:id" element />
      </Routes>
    </div>
  );
}

export default App;
