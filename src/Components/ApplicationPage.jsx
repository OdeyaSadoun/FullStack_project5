import React from 'react';
import Toolbar from './Toolbar';
const ApplicationPage = () => {
  // Retrieve the authorized user from local storage
  var user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
     <h1>Welcome, {user.name}!</h1>
      <Toolbar/>
    </div>
  );
};

export default ApplicationPage;
