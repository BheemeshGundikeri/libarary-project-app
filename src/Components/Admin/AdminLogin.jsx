import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    let navigate = useNavigate()
    let adminform = useRef()
    let handleAdminform = (e)=>{
        e.preventDefault()

        let adminVal = adminform.current[0].value
        let pswdVal = adminform.current[1].value

        let adminCredintial = {
            admin : "bheemesh.gundikeri24@gmail.com",
            password : "Bheemesh@24"
        }

        let {admin, password} = adminCredintial

        if(adminVal === admin && pswdVal === password){
            navigate("./adminportal")
        }
        else{
            alert("Pls enter correct details")
        }
    }
  return (
    <>
      <div className="admin_login">
        
             <form ref={adminform} onSubmit={handleAdminform}>
                <input type="username"  placeholder='Enter Email' />
                <input type="password" placeholder='Enter password' />

                <button>Admin Login</button>
            </form>
            <h4> * Admin Login Page</h4>
      </div>
    </>
  );
}

export default AdminLogin;
