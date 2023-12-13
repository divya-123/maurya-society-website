import React from 'react';
import coverimage from './coverpage.jpeg';

console.log(coverimage);
const Home = () => {
  
  return (
    <div>
      <h2>Home</h2>
      <img src={coverimage} alt="coverpage"></img>
    </div>
  )
}

export default Home
