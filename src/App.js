import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav_elements/Navbar';
import MapWindow from './components/maps/MapWindow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MapWindow />
      Hello World!
    </div>
  );
}

export default App;
