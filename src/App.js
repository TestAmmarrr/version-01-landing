import React from 'react';
import Banner from './components/Banner';
import TopPicks from './components/TopPicks';
import LimitedTimes from './components/LimitedTimes';
import './index.css';

function App() {
  return (
    <div>
      <Banner />
      <LimitedTimes />
      <TopPicks />
    </div>
  );
}

export default App;
