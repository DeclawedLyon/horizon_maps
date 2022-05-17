import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav_elements/Navbar';
import MapWindow from './components/maps/MapWindow';
import CutsMenu from './components/interface_components/CutsMenu';

function App() {
  const nadenCutList = [
    'Parking Lot (North)',
    'Parking Lot (South)',
    'Baseball Field',
    'Entrance Road',
    'Fire Hall'
  ]
  return (
    <div className="App">
      <Navbar />
      <MapWindow />
      <CutsMenu cutList={nadenCutList}/>
    </div>
  );
}

export default App;
