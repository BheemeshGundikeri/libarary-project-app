import { useRef } from 'react';
import '../assets/Style/addusers.css'; // Optional for custom styling

const AddUsers = () => {
  const userformData = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = userformData.current;
    const newUser = {
      username: form[0].value,
      contact: form[1].value,
      email: form[2].value,
      password: form[3].value,
      dob: form[4].value,
      place: form[5].value,
    };

    fetch(`http://localhost:4000/Users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    }).then((response) => {
      if (response.ok) {
        alert('User Details added successfully!');
        form.reset();
      }
    });
  };

  return (
    <div className="page-background">
      <div className="container mt-5 p-4 shadow rounded bg-light">
        <h2 className="text-center mb-4 text-success">👤 Add New User</h2>
        <form ref={userformData} onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter User Name"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Contact Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Contact Number"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password"
              disabled
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Place</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Place"
              />
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-success px-5">
              ➕ Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
