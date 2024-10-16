import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = {
    picture: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png',
    name: 'Vinayak patil',
    email: 'vinayakpatil@gmail.com',
    bio: 'A passionate developer who loves creating web applications.'
  };

  return (
    <div className="profile-container">
      <ProfilePicture picture={user.picture} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
};

export default ProfilePage;
