import React from 'react';
import '../CSS/Info.css'; // Import the info.css file
import ApplicationPage from './ApplicationPage';
function Info() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div><ApplicationPage></ApplicationPage><div className="info">
      <div className="container">
        <h2 className="heading">User Information</h2>
        <p className="value">
          <span className="label">Name:</span> {user.name}
        </p>
        <p className="value">
          <span className="label">Username:</span> {user.username}
        </p>
        <p className="value">
          <span className="label">Email:</span> {user.email}
        </p>
        <p className="value">
          <span className="label">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
        <p className="value">
          <span className="label">Phone:</span> {user.phone}
        </p>
        <p className="value">
          <span className="label">Website:</span> {user.website}
        </p>
        <p className="value">
          <span className="label">Company:</span> {user.company.name}
        </p>
      </div>

      </div>
    </div>
  );
}


export default Info;




