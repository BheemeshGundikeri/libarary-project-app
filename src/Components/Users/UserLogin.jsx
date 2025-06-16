import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const UserLogin = () => {
  let navigate = useNavigate()
  let adminform = useRef()

  let handleAdminform = (e)=>{
      e.preventDefault()

      let adminVal = adminform.current[0].value
      let pswdVal = adminform.current[1].value

      let adminCredintial = {
          admin : "user",
          password : "12345"
      }

      let {admin, password} = adminCredintial

      if(adminVal === admin && pswdVal === password){
          navigate("./userportal")
      }
      else{
          alert("Pls enter correct details")
      }
  }
  return (
    <>
       <div className="user_login">
            <form ref={adminform} onSubmit={handleAdminform}>
                <input type="username"  placeholder='Enter Email' value="admin" />
                <input type="password" placeholder='Enter password' value="12345"/>

                <button>User Login</button>
            </form>
            <h4> * User Login Page</h4>
       </div>
    </>
  );
}

export default UserLogin;
