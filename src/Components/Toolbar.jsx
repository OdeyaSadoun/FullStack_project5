import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Toolbar = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      // Get the user object from local storage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        const { name } = parsedUser; // Extract the name property
        setUsername(name);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    // Remove the user from local storage
    localStorage.removeItem('user');

    // Clear the username state
    setUsername('');

    // Perform any other logout actions, such as clearing other data or redirecting

    // Redirect to the login page without rendering the Toolbar component
    navigate('/', { replace: true });
  };

  const handleNavigation = (path) => {
    // Perform any necessary actions before navigation
    // For example, you can update the state or perform other logic

    // Use the navigate function to navigate to the desired path
    navigate(path);
  };

  if (loading) {
    // Render a loading indicator while the user data is being fetched
    return <div>Loading...</div>;
  }

  if (!username) {
    // If the username is not set, render null to avoid rendering the Toolbar component
    return null;
  }

  return (
    <div>
      <div className="button-sector">
        <button className="button1" onClick={() => handleNavigation('/todos')}>My To Do List</button>
        <button className="button2" onClick={() => handleNavigation('/posts')}>My Posts</button>
        <button className="button3" onClick={() => handleNavigation('/albums')}>My Albums</button>
        <button className="button2" onClick={() => handleNavigation('/info')}>My Info</button>
      </div>
     <div className="button-sector">
        <button className="button1" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Toolbar;
