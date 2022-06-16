import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import SignIn from './Components/SignIn/SignIn';
import MainNavbar from './Components/MainNavbar/MainNavbar';
import MainPage from './Components/MainPage/MainPage';
import GamePage from './Components/GamePage/GamePage';

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
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
