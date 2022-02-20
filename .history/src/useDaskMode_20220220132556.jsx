import React, { useState } from 'react';

function useDaskMode() {
  const [isDaskMode, setDaskMode] = useState(
    () => localStorage.them === 'dark'
  );

  return <div></div>;
}
export default useDaskMode;
