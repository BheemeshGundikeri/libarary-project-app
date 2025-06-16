import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import AdminPortal from './Components/Admin/AdminPortal';
import UserPortal from './Components/Users/UserPortal';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<AdminPortal/>} path='/adminportal/*'/>
          <Route element={<UserPortal/>} path='/userportal/*'/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
