import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import LandingPage from './Pages/Landing Page/LandingPage';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignuUp/Signup';
import Details from './Pages/Details/Details';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
