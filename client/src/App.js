import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Registration from './Components/Registration/Registration';
import SignIn from './Components/SignIn/SignIn';
import MainNavbar from './Components/MainNavbar/MainNavbar';
import MainPage from './Components/MainPage/MainPage';
import AuthRouter from './Components/AuthRouter/AuthRouter';
import { checkUser } from './Redux/Actions/userAction';
import GamePage from './Components/GamePage/GamePage';
import AboutPage from './Components/AboutPage/AboutPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <div className="App">
      <MainNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ladderboard" element />
        <Route
          path="/signIn"
          element={(
            <AuthRouter>
              <SignIn />
            </AuthRouter>
        )}
        />
        <Route
          path="/signUp"
          element={(
            <AuthRouter>
              <Registration />
            </AuthRouter>
        )}
        />
        <Route path="/profile/:id" element />
        <Route path="/game" element={<GamePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
