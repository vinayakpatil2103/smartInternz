import React from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ picture }) => {
  return (
    <div className="profile-picture">
      <img src={picture} alt="Profile" />
    </div>
  );
};

export default ProfilePicture;
