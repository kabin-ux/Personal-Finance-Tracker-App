import React from 'react';
import { Link } from 'react-router-dom';


const Settings = () => {
  return (
    <div id='settings'>
      <h2>Settings</h2>
      <p>Settings page content...</p>
      <li><Link to="/" className='return-btn'>Return</Link></li>

    </div>
  );
};

export default Settings;
