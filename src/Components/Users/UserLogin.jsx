import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [adminVal, setAdminVal] = useState("user");
  const [pswdVal, setPswdVal] = useState("12345");
  const adminform = useRef();
  const navigate = useNavigate();

  const handleAdminform = (e) => {
    e.preventDefault();

    let adminCredintial = {
      admin: "user",
      password: "12345",
    };

    let { admin, password } = adminCredintial;

    if (adminVal === admin && pswdVal === password) {
      navigate("./userportal");
    } else {
      alert("Pls enter correct details");
    }
  };

  return (
    <>
      <div className="user_login">
        <form ref={adminform} onSubmit={handleAdminform}>
          <input
            type="text"
            placeholder="Enter Email"
            value={adminVal}
            onChange={(e) => setAdminVal(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={pswdVal}
            onChange={(e) => setPswdVal(e.target.value)}
          />
          <button type="submit">User Login</button>
        </form>
        <h4>* User Login Page</h4>
      </div>
    </>
  );
};

export default UserLogin;
