import React, { useState } from 'react';

function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(
    () => localStorage.them === 'dark'
  );

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const html = window.document.documentElement;
    const prev = isDarkMode ? 'light' : 'dark';
  }, [isDarkMode]);

  return <div></div>;
}
export default useDarkMode;
