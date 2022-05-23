// import logo from './logo.svg';
import './App.css';
import "./tailwind.generated.css"
// import Navbar from './components/nav_elements/Navbar';
import BottomNav from './components/nav_elements/BottomNav';
import MapWindow from './components/maps/MapWindow';
import CutsMenu from './components/interface_components/CutsMenu';
import { useState } from 'react';


function setDefaultCuts() {
  const newNadenCutList = [
    {
      locationName: 'Baseball Field',
      polygonCoords: [
        {lat: 48.43459930069949, lng: Number(-123.41968549014572)},
        {lat: 48.434594894435115, lng:Number( -123.41938888555694)},
        {lat: 48.43454781192849, lng: Number(-123.41933211475094)},
        {lat: 48.434378314543366, lng:Number( -123.41932501840019)},
        {lat: 48.43418056687943, lng: Number(-123.41936759650467)},
        {lat: 48.43378506924258, lng: Number(-123.41850184171304)},
        {lat: 48.433290692867246, lng:Number( -123.41854441981755)},
        {lat: 48.433290692867246, lng:Number( -123.4200062680723)},
        {lat: 48.433337776538814, lng:Number( -123.42006303887831)},
        {lat: 48.43435477319516, lng: Number(-123.4199069191618)},
        {lat: 48.43459930069949, lng: Number(-123.41968549014572)}
      ],
      lastCutDate: new Date("Dec 15, 2021, 21:45:10"),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    },
    {
      locationName: 'Entrance Road',
      polygonCoords: [
        {lat: 48.433220067255604, lng:Number( -123.42013400241261)},
        {lat: 48.433097649335174, lng:Number( -123.41817540960528)},
        {lat: 48.433050565441114, lng:Number( -123.41816121690377)},
        {lat: 48.433088232559854, lng:Number( -123.41883537022514)},
        {lat: 48.43297523111984, lng: Number(-123.4188992373819)},
        {lat: 48.433092940947745, lng:Number( -123.41995659364385)},
        {lat: 48.43233959333703, lng: Number(-123.42009142430813)},
        {lat: 48.43233959333703, lng: Number(-123.42025464037539)},
        {lat: 48.433220067255604, lng:Number( -123.42013400241261)}
      ],
      lastCutDate: new Date("Dec 15, 2021, 21:45:10"),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    },
    {
      locationName: 'Fire Hall (East Side)',
      polygonCoords: [
        {lat: 48.43240551169887, lng: Number(-123.42031850753217)},
        {lat: 48.43192421851562, lng: Number(-123.42037018940131)},
        {lat: 48.43097702055356, lng: Number(-123.42038529568963)},
        {lat: 48.430977365539384, lng:Number( -123.42071753004655)},
        {lat: 48.43112564569136, lng: Number(-123.42070263173073)},
        {lat: 48.43112564569136, lng: Number(-123.4205164027834)},
        {lat: 48.43179784362009, lng: Number(-123.42049405530973)},
        {lat: 48.43179784362009, lng: Number(-123.42072497920441)},
        {lat: 48.432143824381754, lng:Number( -123.42071753004655)},
        {lat: 48.43215056042352, lng: Number(-123.42039111861304)},
        {lat: 48.432303800711196, lng:Number( -123.42038411995973)},
        {lat: 48.43231773162353, lng: Number(-123.42113997451463)},
        {lat: 48.43237809886612, lng: Number(-123.42089502164961)},
        {lat: 48.43240596064622, lng: Number(-123.42031413342688)}
      ],
      lastCutDate: new Date("Dec 15, 2021, 21:45:10"),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    },
    {
      locationName: 'Parking Lot (South)',
      polygonCoords: [
        {lat: 48.434682150511534, lng:Number( -123.41968803278945)},
        {lat: 48.434844669976805, lng:Number( -123.41943608127116)},
        {lat: 48.434886460612425, lng:Number( -123.41854725230384)},
        {lat: 48.43472858469751, lng: Number(-123.41837928462495)},
        {lat: 48.434682150511534, lng:Number( -123.41968803278945)}
      ],
      lastCutDate: new Date("Dec 15, 2021, 21:45:10"),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    },
    {
      locationName: 'Parking Lot (North)',
      polygonCoords: [
        {lat: 48.43494250550318, lng: Number(-123.41928152471407)},
        {lat: 48.435064918978696, lng:Number( -123.41903315243775)},
        {lat: 48.43518262396546, lng: Number(-123.41886284001971)},
        {lat: 48.43497546300637, lng: Number(-123.41864994949718)},
        {lat: 48.43494250550318, lng: Number(-123.41928152471407)}
      ],
      lastCutDate: new Date("Dec 15, 2021, 21:45:10"),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    },
    {
      locationName: 'Ontario Dr Hillside',
      polygonCoords: [
        {lat: 48.43478713414014, lng: Number(-123.42056596419964)},
        {lat: 48.43465530351046, lng: Number(-123.42035307367709)},
        {lat: 48.43466942823714, lng: Number(-123.41979246196773)},
        {lat: 48.43477300944621, lng: Number(-123.4196931130572)},
        {lat: 48.43511670921789, lng: Number(-123.4190828268926)},
        {lat: 48.43522028951505, lng: Number(-123.41889832177309)},
        {lat: 48.43538978409128, lng: Number(-123.41911121229562)},
        {lat: 48.43532386960104, lng: Number(-123.41924604295988)},
        {lat: 48.43522028951505, lng: Number(-123.41913250134787)},
        {lat: 48.43502254512809, lng: Number(-123.41948022253467)},
        {lat: 48.43508846000928, lng: Number(-123.4195653787437)},
        {lat: 48.43498017123077, lng: Number(-123.41977826926623)},
        {lat: 48.43488129866623, lng: Number(-123.41971440210946)},
        {lat: 48.43472592710464, lng: Number(-123.42020405031131)},
        {lat: 48.43482950819846, lng: Number(-123.42028211016958)},
        {lat: 48.434876590444055, lng:Number( -123.42036017002783)},
        {lat: 48.43478713414014, lng: Number(-123.42056596419964)}
      ],
      lastCutDate: new Date("Dec 15, 2021, 21:45:10"),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    },
    {
      locationName: `General's House(1)`,
      polygonCoords: [
        {lat: 48.436767084664204, lng: Number(-123.42031919113545)},
        {lat: 48.43677537481232, lng: Number(-123.42031641433873)},
        {lat: 48.43683662975369, lng: Number(-123.42020256567254)},
        {lat: 48.43683985369592, lng: Number(-123.42017410350599)},
        {lat: 48.43683110299512, lng: Number(-123.42015119493293)},
        {lat: 48.436738069135146, lng: Number(-123.42007760981942)},
        {lat: 48.436701223994994, lng: Number(-123.42023311043663)},
        {lat: 48.436767084664204, lng: Number(-123.42031919113545)}
      ],
      lastCutDate: new Date('May 23, 2022, 12:45:10'),
      lastTrimDate: new Date('May 23, 2022, 12:45:10'),
    },
    {
      locationName: `General's House(2)`,
      polygonCoords: [
        {lat: 48.436742895519835, lng: Number(-123.42035416798281)},
        {lat: 48.43668506166494, lng: Number(-123.42028711275947)},
        {lat: 48.436651695949465, lng: Number(-123.42041988210168)},
        {lat: 48.436669491000444, lng: Number(-123.42042323486287)},
        {lat: 48.43669618356521, lng: Number(-123.42041250602712)},
        {lat: 48.43670997471821, lng: Number(-123.42040110663918)},
        {lat: 48.436741293083635, lng: Number(-123.4203650082816)},
        {lat: 48.436742895519835, lng: Number(-123.42035416798281)}
      ],
      lastCutDate: new Date('May 23, 2022, 12:45:10'),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    },
    {
      locationName: `General's House(3)`,
      polygonCoords: [
        {lat: 48.43668694649599, lng: Number(-123.42020742506682)},
        {lat: 48.43672333108229, lng: Number(-123.42007969241698)},
        {lat: 48.43668234085033, lng: Number(-123.42004845345369)},
        {lat: 48.43667220842833, lng: Number(-123.42004498245777)},
        {lat: 48.43666576052236, lng: Number(-123.42005053605125)},
        {lat: 48.43661509837567, lng: Number(-123.42013800514842)},
        {lat: 48.43668694649599, lng: Number(-123.42020742506682)}
      ],
      lastCutDate: new Date('May 23, 2022, 12:45:10'),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    },
    {
      locationName: `General's House(4)`,
      polygonCoords: [
        {lat: 48.43663766606545, lng: Number(-123.42041707322039)},
        {lat: 48.436674971816345, lng: Number(-123.4202650435991)},
        {lat: 48.43660128141781, lng: Number(-123.42017549190437)},
        {lat: 48.43654693468041, lng: Number(-123.42025324221297)},
        {lat: 48.43651445636654, lng: Number(-123.42022264613743)},
        {lat: 48.4364986682908, lng: Number(-123.42029607671819)},
        {lat: 48.43655821186501, lng: Number(-123.42036134834555)},
        {lat: 48.436593162075745, lng: Number(-123.42039481540523)},
        {lat: 48.43661223950808, lng: Number(-123.42040508503446)},
        {lat: 48.43663766606545, lng: Number(-123.42041707322039)}
      ],
      lastCutDate: new Date('May 23, 2022, 12:45:10'),
      lastTrimDate: new Date('May 23, 2022, 12:45:10')
    }
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

  const updateCutDate = (cutName) => {
    console.log('there is a bug in updatecuts that must be fixed. cuts are currently updated by mapping the state and resetting state to new mapped obj. Should use prevState instead to prevent overwritten dates');
    const newCutList = cutList.map(cut => {
      if (cut.locationName === cutName) {
        return {
          locationName: cut.locationName,
          polygonCoords: cut.polygonCoords,
          lastCutDate: new Date()
        }
      } else {
        return cut
      }
    })
    setCutList(newCutList);
    setTimeout(() => {
      const newCutList = cutList.map(cut => {
        if (cut.locationName === cutName) {
          return {
            locationName: cut.locationName,
            polygonCoords: cut.polygonCoords,
            lastCutDate: new Date("May 20, 2022, 21:45:10")
          }
        } else {
          return cut
        }
      })
      setCutList(newCutList)
    }, 3000)
  }

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <h1 className='bg-white-100 text-blue-300'>Hello</h1> */}
      <MapWindow 
        devMode={devMode}
        cutList={cutList}
        updateCutDate={updateCutDate}
      />
      <CutsMenu
        cutList={cutList}
        updateCutDate={updateCutDate}
      />
      <BottomNav />
    </div>
  );
}

export default App;
