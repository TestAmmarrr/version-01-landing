import React, { useState } from 'react';
import Banner from './components/Banner';
import TopPicks from './components/TopPicks';
import LimitedTimes from './components/LimitedTimes';
import './index.css';
import Drawer from './components/Drawer';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="overflow-y-hidden">
      <Banner handleNav={() => setOpen((prev) => !prev)} />
      <LimitedTimes />
      <TopPicks />
      {isOpen && (
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="fixed inset-0 z-10 overflow-hidden bg-white opacity-50"
        ></div>
      )}
      {/**DRAWER */}
      <Drawer isOpen={isOpen} close={() => setOpen(false)} />
    </div>
  );
}

export default App;
