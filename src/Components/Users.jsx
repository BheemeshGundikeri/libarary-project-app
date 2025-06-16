import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import '../assets/Style/user.css';

const Users = () => {

    let [users, setUsers ] = useState([])

    let fetchUsers = async ()=>{
        let fetchUsersData = await axios.get("http://localhost:4000/Users")
        setUsers(fetchUsersData.data)
    }

    fetchUsers()

    let loc = useLocation()
    let bool = loc.pathname.startsWith('/adminportal');

    let deletedata = async (username) => {
        console.log("Deleting user:", username);
        let bool = window.confirm(`Do you want to delete the ${username} details?`);
        if (bool) {
            try {
                await fetch(`http://localhost:4000/Users/${username}`, { method: 'DELETE' });
                alert(`${username}'s data deleted successfully`);
                setUsers(users.filter(user => user.username !== username));
            } catch (error) {
                console.error("Error deleting user:", error);
                alert("Failed to delete user. Please try again.");
            }
        }
    };
    
  return (
 <div className="users-section py-5" style={{ background: "linear-gradient(to right, #2b5876, #4e4376)" }}>
  <div className="container bg-white p-4 rounded shadow">
    <h1 className="text-center mb-4 text-primary fw-bold">📖 Users Reading Books</h1>

    <div className="table-responsive">
      <table className="table table-bordered table-hover text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>Sl. No</th>
            <th>User Name</th>
            {bool && <th>Email</th>}
            {bool && <th>Password</th>}
            <th>Age</th>
            <th>Place</th>
            <th>Books Reading</th>
            {bool && <th>Delete User</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((elem, index) => {
            const { username, email, password, dob, place, booksReading = [] } = elem;
            const age = new Date().getFullYear() - dob.slice(0, 4);

            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{username}</td>
                {bool && <td>{email}</td>}
                {bool && <td>{password}</td>}
                <td>{age}</td>
                <td>{place}</td>
                <td>
                  <span className="badge bg-success">{booksReading.length}</span>
                </td>
                {bool && (
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => deletedata(username)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>


  );
}

export default Users;
