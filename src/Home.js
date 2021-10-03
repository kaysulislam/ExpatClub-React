import React from 'react';
import User from './User';
// import UserDetails from './UserDetails';

function Home({ users }) {
  return (
    <div className="container">
      <User users={users} />
    </div>
  );
}

export default Home;
