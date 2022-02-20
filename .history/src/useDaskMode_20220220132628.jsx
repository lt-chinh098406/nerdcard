import React, { useState } from 'react';

function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(
    () => localStorage.them === 'dark'
  );

  const toggleDarkMode = () => {};

  return <div></div>;
}
export default useDarkMode;
