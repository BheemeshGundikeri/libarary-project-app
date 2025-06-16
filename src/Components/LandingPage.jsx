import { useState } from 'react';
import '../assets/Style/landingPage.css'
import AdminLogin from './Admin/AdminLogin';
import UserLogin from './Users/UserLogin';

const LandingPage = () => {

    let [bool , setBool] = useState(true)
    let handlebtn = ()=> {
        setBool(!bool)
    }
  return (
    <>
      <div className="landingpage">
        <div className="login-container">
            <div className="header">Login Page</div>
            <div className="btn-box">
                <button onClick={handlebtn} className={bool ? 'rght-btn':"left-btn" }>
                        {bool ? "Admin":"User"} 
                </button>
            </div>

            <div className="form-box">
              {bool ? <AdminLogin/> : <UserLogin/> }
                
               
            </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
