import React from 'react';
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({ users }) {
  return (
    <div style={{ padding: '30px', marginTop: '5%', marginLeft: '10%' }}>
      {/* Renders the User components */}
      <User users={users} />
    </div>
  );
}

export default Home;
