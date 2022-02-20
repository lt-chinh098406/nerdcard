import './App.css';

import NavBar from './components/NavBar/NavBar';
import Sologan from './components/Sologan/Sologan';

function App() {
  return (
    <div className="text-white font-sora h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700">
      <NavBar />
      <Sologan />
    </div>
  );
}

export default App;
