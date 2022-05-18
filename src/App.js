import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav_elements/Navbar';
import MapWindow from './components/maps/MapWindow';
import CutsMenu from './components/interface_components/CutsMenu';
import { useState } from 'react';


function setDefaultCuts() {
  const newNadenCutList = [
    {
      locationName: 'Baseball Field',
      polygonCoords: [
        {lat: 48.43459930069949, lng: -123.41968549014572},
        {lat: 48.434594894435115, lng: -123.41938888555694},
        {lat: 48.43454781192849, lng: -123.41933211475094},
        {lat: 48.434378314543366, lng: -123.41932501840019},
        {lat: 48.43418056687943, lng: -123.41936759650467},
        {lat: 48.43378506924258, lng: -123.41850184171304},
        {lat: 48.433290692867246, lng: -123.41854441981755},
        {lat: 48.433290692867246, lng: -123.4200062680723},
        {lat: 48.433337776538814, lng: -123.42006303887831},
        {lat: 48.43435477319516, lng: -123.4199069191618},
        {lat: 48.43459930069949, lng: -123.41968549014572}
      ],
      lastCutDate: new Date("Dec 15, 2021, 21:45:10")
    },
    {
      locationName: 'Entrance Road',
      polygonCoords: [
        {lat: 48.433220067255604, lng: -123.42013400241261},
        {lat: 48.433097649335174, lng: -123.41817540960528},
        {lat: 48.433050565441114, lng: -123.41816121690377},
        {lat: 48.433088232559854, lng: -123.41883537022514},
        {lat: 48.43297523111984, lng: -123.4188992373819},
        {lat: 48.433092940947745, lng: -123.41995659364385},
        {lat: 48.43233959333703, lng: -123.42009142430813},
        {lat: 48.43233959333703, lng: -123.42025464037539},
        {lat: 48.433220067255604, lng: -123.42013400241261}
      ],
      lastCutDate: new Date()
    },
    {
      locationName: 'Fire Hall (East Side)',
      polygonCoords: [
        {lat: 48.43240551169887, lng: -123.42031850753217},
        {lat: 48.43192421851562, lng: -123.42037018940131},
        {lat: 48.43097702055356, lng: -123.42038529568963},
        {lat: 48.430977365539384, lng: -123.42071753004655},
        {lat: 48.43112564569136, lng: -123.42070263173073},
        {lat: 48.43112564569136, lng: -123.4205164027834},
        {lat: 48.43179784362009, lng: -123.42049405530973},
        {lat: 48.43179784362009, lng: -123.42072497920441},
        {lat: 48.432143824381754, lng: -123.42071753004655},
        {lat: 48.43215056042352, lng: -123.42039111861304},
        {lat: 48.432303800711196, lng: -123.42038411995973},
        {lat: 48.43231773162353, lng: -123.42113997451463},
        {lat: 48.43237809886612, lng: -123.42089502164961},
        {lat: 48.43240596064622, lng: -123.42031413342688}
      ],
      lastCutDate: new Date()
    },
    {
      locationName: 'Parking Lot (South)',
      polygonCoords: [
        {lat: 48.434682150511534, lng: -123.41968803278945},
        {lat: 48.434844669976805, lng: -123.41943608127116},
        {lat: 48.434886460612425, lng: -123.41854725230384},
        {lat: 48.43472858469751, lng: -123.41837928462495},
        {lat: 48.434682150511534, lng: -123.41968803278945}
      ],
      lastCutDate: new Date()
    },
    {
      locationName: 'Parking Lot (North)',
      polygonCoords: [
        {lat: 48.43494250550318, lng: -123.41928152471407},
        {lat: 48.435064918978696, lng: -123.41903315243775},
        {lat: 48.43518262396546, lng: -123.41886284001971},
        {lat: 48.43497546300637, lng: -123.41864994949718},
        {lat: 48.43494250550318, lng: -123.41928152471407}
      ],
      lastCutDate: new Date()
    },
    {
      locationName: 'Ontario Dr Hillside',
      polygonCoords: [
        {lat: 48.43478713414014, long: -123.42056596419964},
        {lat: 48.43465530351046, long: -123.42035307367709},
        {lat: 48.43466942823714, long: -123.41979246196773},
        {lat: 48.43477300944621, long: -123.4196931130572},
        {lat: 48.43511670921789, long: -123.4190828268926},
        {lat: 48.43522028951505, long: -123.41889832177309},
        {lat: 48.43538978409128, long: -123.41911121229562},
        {lat: 48.43532386960104, long: -123.41924604295988},
        {lat: 48.43522028951505, long: -123.41913250134787},
        {lat: 48.43502254512809, long: -123.41948022253467},
        {lat: 48.43508846000928, long: -123.4195653787437},
        {lat: 48.43498017123077, long: -123.41977826926623},
        {lat: 48.43488129866623, long: -123.41971440210946},
        {lat: 48.43472592710464, long: -123.42020405031131},
        {lat: 48.43482950819846, long: -123.42028211016958},
        {lat: 48.434876590444055, long: -123.42036017002783},
        {lat: 48.43478713414014, long: -123.42056596419964}
      ],
      lastCutDate: new Date()
    },
    // {
    //   locationName: '',
    //   polygonCoords: [
    //     {},
    //   ],
    //   lastCutDate: ''
    // },
    // {
    //   locationName: '',
    //   polygonCoords: [
    //     {},
    //   ],
    //   lastCutDate: ''
    // },
  ]
  return newNadenCutList
}

function App() {
  const devMode = true;

  const [cutList, setCutList] = useState(setDefaultCuts());

  return (
    <div className="App">
      <Navbar />
      <MapWindow 
        devMode={devMode}
        cutList={cutList}
      />
      <CutsMenu cutList={cutList}/>
    </div>
  );
}

export default App;