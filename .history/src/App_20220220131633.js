import React, { useState, useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setisMoble] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  });

  useEffect(() => {
    if (windowSize.width < 500) {
      setisMoble(true);
    } else {
      setisMoble(false);
    }
  });

  return (
    <div className="text-white overflow-auto font-sora h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 md:mx-20">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
