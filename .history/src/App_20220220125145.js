import './App.css';

import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';
import Content from './components/Content/Content';

function App() {
  const windowSize, setWindowSize = useState({width});
  return (
    <div className="text-white overflow-auto font-sora h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700">
      <NavBar />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
