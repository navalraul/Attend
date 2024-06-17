import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div id='main'>
      <div className='details'>
        <div>Date</div>
        <div>Time</div>
        <div>
          <button>Check IN</button>
          <button>Check out</button>
          <button>View Report</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
