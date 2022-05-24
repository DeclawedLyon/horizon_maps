// import logo from './logo.svg';
import './App.css';
import "./tailwind.generated.css"
import Navbar from './components/nav_elements/Navbar';
import BottomNav from './components/nav_elements/BottomNav';
import MapWindow from './components/maps/MapWindow';
import CutsMenu from './components/interface_components/CutsMenu';
import UploadImagePopup from './components/popups/UploadImagePopup'
import { useState } from 'react';

const NadenCutList = [
  {
    locationName: 'Baseball Field',
    locationGroup: `Entrance`,
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
    lastCutDate: new Date("May 20, 2022, 21:45:10"),
    lastTrimDate: new Date('May 20, 2022, 12:45:10')
  },
  {
    locationName: 'Entrance Road',
    locationGroup: `Entrance`,
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
    lastCutDate: new Date(),
    lastTrimDate: new Date()
  },
  {
    locationName: 'Fire Hall (East Side)',
    locationGroup: ``,
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
    lastCutDate: new Date('May 1, 2022, 12:45:10'),
    lastTrimDate: new Date('May 1, 2022, 12:45:10')
  },
  {
    locationName: 'Parking Lot (South)',
    locationGroup: ``,
    polygonCoords: [
      {lat: 48.434682150511534, lng:Number( -123.41968803278945)},
      {lat: 48.434844669976805, lng:Number( -123.41943608127116)},
      {lat: 48.434886460612425, lng:Number( -123.41854725230384)},
      {lat: 48.43472858469751, lng: Number(-123.41837928462495)},
      {lat: 48.434682150511534, lng:Number( -123.41968803278945)}
    ],
    lastCutDate: new Date("May 20, 2022, 21:45:10"),
    lastTrimDate: new Date("May 20, 2022, 21:45:10")
  },
  {
    locationName: 'Parking Lot (North)',
    locationGroup: ``,
    polygonCoords: [
      {lat: 48.43494250550318, lng: Number(-123.41928152471407)},
      {lat: 48.435064918978696, lng:Number( -123.41903315243775)},
      {lat: 48.43518262396546, lng: Number(-123.41886284001971)},
      {lat: 48.43497546300637, lng: Number(-123.41864994949718)},
      {lat: 48.43494250550318, lng: Number(-123.41928152471407)}
    ],
    lastCutDate: new Date(),
    lastTrimDate: new Date()
  },
  {
    locationName: 'Ontario Dr Hillside',
    locationGroup: ``,
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
    lastCutDate: new Date('May 1, 2022, 12:45:10'),
    lastTrimDate: new Date('May 1, 2022, 12:45:10')
  },
  {
    locationName: `General's House(1)`,
    locationGroup: `General's House`,
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
    lastCutDate: new Date("May 20, 2022, 21:45:10"),
    lastTrimDate: new Date("May 20, 2022, 21:45:10"),
  },
  {
    locationName: `General's House(2)`,
    locationGroup: `General's House`,
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
    lastCutDate: new Date('May 1, 2022, 12:45:10'),
    lastTrimDate: new Date('May 1, 2022, 12:45:10')
  },
  {
    locationName: `General's House(3)`,
    locationGroup: `General's House`,
    polygonCoords: [
      {lat: 48.43668694649599, lng: Number(-123.42020742506682)},
      {lat: 48.43672333108229, lng: Number(-123.42007969241698)},
      {lat: 48.43668234085033, lng: Number(-123.42004845345369)},
      {lat: 48.43667220842833, lng: Number(-123.42004498245777)},
      {lat: 48.43666576052236, lng: Number(-123.42005053605125)},
      {lat: 48.43661509837567, lng: Number(-123.42013800514842)},
      {lat: 48.43668694649599, lng: Number(-123.42020742506682)}
    ],
    lastCutDate: new Date(),
    lastTrimDate: new Date()
  },
  {
    locationName: `General's House(4)`,
    locationGroup: `General's House`,
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
    lastCutDate: new Date("May 20, 2022, 21:45:10"),
    lastTrimDate: new Date("May 20, 2022, 21:45:10")
  },
  {
    locationName: `General's Office(1)`,
    locationGroup: `General's House`,
    polygonCoords: [
      {lat: 48.4365500107154, lng: Number(-123.4206091083413)},
      {lat: 48.43658180645899, lng: Number(-123.42053653629485)},
      {lat: 48.43658407758275, lng: Number(-123.42052489738171)},
      {lat: 48.43658407758275, lng: Number(-123.42051325846862)},
      {lat: 48.4365790811103, lng: Number(-123.42049545777795)},
      {lat: 48.43652548255677, lng: Number(-123.42042767822514)},
      {lat: 48.43651276424761, lng: Number(-123.42045232533526)},
      {lat: 48.43656999661369, lng: Number(-123.42052215881392)},
      {lat: 48.436541834663835, lng: Number(-123.42059952335403)},
      {lat: 48.4365500107154, lng: Number(-123.4206091083413)}
    ],
    lastCutDate: new Date(),
    lastTrimDate: new Date()
  },
  {
    locationName: `General's Office(2)`,
    locationGroup: `General's House`,
    polygonCoords: [
      {lat: 48.436484148038566, lng: Number(-123.42068373431711)},
      {lat: 48.43640375003682, lng: Number(-123.42058651516054)},
      {lat: 48.4363910316972, lng: Number(-123.42061253155453)},
      {lat: 48.43636332387485, lng: Number(-123.420580353383)},
      {lat: 48.43636150696795, lng: Number(-123.4205871998025)},
      {lat: 48.43636286964813, lng: Number(-123.42059541550584)},
      {lat: 48.436444176166596, lng: Number(-123.42069263466243)},
      {lat: 48.436459165622274, lng: Number(-123.42069742715607)},
      {lat: 48.436484148038566, lng: Number(-123.42068373431711)}
    ],
    lastCutDate: new Date(),
    lastTrimDate: new Date()
  },
  {
    locationName: 'Museum Parking Lot',
    locationGroup: `General's House`,
    polygonCoords:[
      {lat: 48.43630109477424, lng: Number(-123.42092130507676)},
      {lat: 48.436335673835345, lng: Number(-123.42086174321811)},
      {lat: 48.43630052837274, lng: Number(-123.42081480456177)},
      {lat: 48.436267162404704, lng: Number(-123.42078731192017)},
      {lat: 48.43623112713463, lng: Number(-123.42077524197998)},
      {lat: 48.4362044343255, lng: Number(-123.42077121866657)},
      {lat: 48.4361821903072, lng: Number(-123.42078060639784)},
      {lat: 48.43622445393367, lng: Number(-123.42083223891983)},
      {lat: 48.4362466979335, lng: Number(-123.42079435272193)},
      {lat: 48.436259599448924, lng: Number(-123.42081078124836)},
      {lat: 48.43623957985461, lng: Number(-123.42085101438235)},
      {lat: 48.436300083493286, lng: Number(-123.42092276347137)},
      {lat: 48.43630109477424, lng: Number(-123.42092130507676)}
    ],
    lastCutDate: new Date('May 1, 2022, 12:45:10'),
    lastTrimDate: new Date('May 1, 2022, 12:45:10')
  },
  {
    locationName: `General's Park(1)`,
    locationGroup: `General's House`,
    polygonCoords: [
      {lat: 48.43660349036499, lng: Number(-123.42101563496729)},
      {lat: 48.43668178861698, lng: Number(-123.42082788033387)},
      {lat: 48.43656656557929, lng: Number(-123.42067030055227)},
      {lat: 48.436537648559685, lng: Number(-123.42070986313574)},
      {lat: 48.43649538519377, lng: Number(-123.4207601545554)},
      {lat: 48.43658791967548, lng: Number(-123.4208962766646)},
      {lat: 48.43660349036499, lng: Number(-123.42101563496729)}
    ],
    lastCutDate: new Date(),
    lastTrimDate: new Date()
  },
  {
    locationName: `General's Park(2)`,
    locationGroup: `General's House`,
    polygonCoords: [
      {lat: 48.4367049221709, lng: Number(-123.42079435272233)},
      {lat: 48.43680724352172, lng: Number(-123.42055295390793)},
      {lat: 48.43676008675087, lng: Number(-123.42048925144303)},
      {lat: 48.436727165960356, lng: Number(-123.42047785205459)},
      {lat: 48.43670091828778, lng: Number(-123.42048321647269)},
      {lat: 48.436652871665544, lng: Number(-123.42053082568329)},
      {lat: 48.436571904106756, lng: Number(-123.4206582306131)},
      {lat: 48.4367049221709, lng: Number(-123.42079435272233)}
    ],
    lastCutDate: new Date(),
    lastTrimDate: new Date()
  },
  // ==================== data boilerplate ====================
  
  // {
  //   locationName: ``,
  //   locationGroup: ``,
  //   polygonCoords: [
  //     {},
  //     {}
  //   ],
  //   lastCutDate: new Date(),
  //   lastTrimDate: new Date()
  // },
]
const colvilleCutList = [
  {
    locationName: ``,
    locationGroup: ``,
    polygonCoords: [
      {lat: 48.43807004526669, lng: Number(-123.41378091893203)},
      {lat: 48.4387363642985, lng: Number(-123.41392480692663)},
      {lat: 48.43876208715985, lng: Number(-123.41388603382865)},
      {lat: 48.43884932111439, lng: Number(-123.4138826622549)},
      {lat: 48.4388962931817, lng: Number(-123.41383883179631)},
      {lat: 48.43892425272495, lng: Number(-123.4137477993054)},
      {lat: 48.439106548574834, lng: Number(-123.41323532008693)},
      {lat: 48.43913786313263, lng: Number(-123.41321340485764)},
      {lat: 48.43920608406914, lng: Number(-123.41285938960596)},
      {lat: 48.43919490031573, lng: Number(-123.41285264645849)},
      //may need to fix corner of box here
      {lat: 48.4392161494451, lng: Number(-123.41282230229481)},
      {lat: 48.43924299043793, lng: Number(-123.41265035203419)},
      {lat: 48.43933469706019, lng: Number(-123.41192377787083)},
      {lat: 48.43941745655168, lng: Number(-123.41150233114138)},
      {lat: 48.43944877091785, lng: Number(-123.41114494432514)},
      //tree cutout top right starts here
      {lat: 48.43943423210738, lng: Number(-123.41107919863725)},
      {lat: 48.43946666483268, lng: Number(-123.41097299406448)},
      //ends here
      {lat: 48.43948232200341, lng: Number(-123.41080441536636)},
      {lat: 48.43841538662928, lng: Number(-123.41055154733297)},
      {lat: 48.43840867627308, lng: Number(-123.41059537779158)},
      {lat: 48.43842209698459, lng: Number(-123.4106038067259)},
      {lat: 48.43841874180704, lng: Number(-123.41062909352897)},
      {lat: 48.438404202701776, lng: Number(-123.4105987493653)},
      {lat: 48.43838966359235, lng: Number(-123.41059200621784)},
      //bus stop starts here
      {lat: 48.43836729572385, lng: Number(-123.41080778693717)},
      {lat: 48.438380716446275, lng: Number(-123.4108128442978)},
      {lat: 48.43839861073735, lng: Number(-123.41064257982401)},
      {lat: 48.43840643948769, lng: Number(-123.4106543803321)},
      {lat: 48.43807004526669, lng: Number(-123.41378091893203)}
    ],
    lastCutDate: new Date(),
    lastTrimDate: new Date()
  },
  // {
  //   locationName: ``,
  //   locationGroup: ``,
  //   polygonCoords: [
  //     {},
  //     {}
  //   ],
  //   lastCutDate: new Date(),
  //   lastTrimDate: new Date()
  // },
]
function setDefaultCuts() {

  const newNadenCutList = [
    {
      locationName: 'Baseball Field',
      locationGroup: `Entrance`,
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
      lastCutDate: new Date("May 20, 2022, 21:45:10"),
      lastTrimDate: new Date('May 20, 2022, 12:45:10')
    },
    {
      locationName: 'Entrance Road',
      locationGroup: `Entrance`,
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
      lastCutDate: new Date(),
      lastTrimDate: new Date()
    },
    {
      locationName: 'Fire Hall (East Side)',
      locationGroup: ``,
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
      lastCutDate: new Date('May 1, 2022, 12:45:10'),
      lastTrimDate: new Date('May 1, 2022, 12:45:10')
    },
    {
      locationName: 'Parking Lot (South)',
      locationGroup: ``,
      polygonCoords: [
        {lat: 48.434682150511534, lng:Number( -123.41968803278945)},
        {lat: 48.434844669976805, lng:Number( -123.41943608127116)},
        {lat: 48.434886460612425, lng:Number( -123.41854725230384)},
        {lat: 48.43472858469751, lng: Number(-123.41837928462495)},
        {lat: 48.434682150511534, lng:Number( -123.41968803278945)}
      ],
      lastCutDate: new Date("May 20, 2022, 21:45:10"),
      lastTrimDate: new Date("May 20, 2022, 21:45:10")
    },
    {
      locationName: 'Parking Lot (North)',
      locationGroup: ``,
      polygonCoords: [
        {lat: 48.43494250550318, lng: Number(-123.41928152471407)},
        {lat: 48.435064918978696, lng:Number( -123.41903315243775)},
        {lat: 48.43518262396546, lng: Number(-123.41886284001971)},
        {lat: 48.43497546300637, lng: Number(-123.41864994949718)},
        {lat: 48.43494250550318, lng: Number(-123.41928152471407)}
      ],
      lastCutDate: new Date(),
      lastTrimDate: new Date()
    },
    {
      locationName: 'Ontario Dr Hillside',
      locationGroup: ``,
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
      lastCutDate: new Date('May 1, 2022, 12:45:10'),
      lastTrimDate: new Date('May 1, 2022, 12:45:10')
    },
    {
      locationName: `General's House(1)`,
      locationGroup: `General's House`,
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
      lastCutDate: new Date("May 20, 2022, 21:45:10"),
      lastTrimDate: new Date("May 20, 2022, 21:45:10"),
    },
    {
      locationName: `General's House(2)`,
      locationGroup: `General's House`,
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
      lastCutDate: new Date('May 1, 2022, 12:45:10'),
      lastTrimDate: new Date('May 1, 2022, 12:45:10')
    },
    {
      locationName: `General's House(3)`,
      locationGroup: `General's House`,
      polygonCoords: [
        {lat: 48.43668694649599, lng: Number(-123.42020742506682)},
        {lat: 48.43672333108229, lng: Number(-123.42007969241698)},
        {lat: 48.43668234085033, lng: Number(-123.42004845345369)},
        {lat: 48.43667220842833, lng: Number(-123.42004498245777)},
        {lat: 48.43666576052236, lng: Number(-123.42005053605125)},
        {lat: 48.43661509837567, lng: Number(-123.42013800514842)},
        {lat: 48.43668694649599, lng: Number(-123.42020742506682)}
      ],
      lastCutDate: new Date(),
      lastTrimDate: new Date()
    },
    {
      locationName: `General's House(4)`,
      locationGroup: `General's House`,
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
      lastCutDate: new Date("May 20, 2022, 21:45:10"),
      lastTrimDate: new Date("May 20, 2022, 21:45:10")
    },
    {
      locationName: `General's Office(1)`,
      locationGroup: `General's House`,
      polygonCoords: [
        {lat: 48.4365500107154, lng: Number(-123.4206091083413)},
        {lat: 48.43658180645899, lng: Number(-123.42053653629485)},
        {lat: 48.43658407758275, lng: Number(-123.42052489738171)},
        {lat: 48.43658407758275, lng: Number(-123.42051325846862)},
        {lat: 48.4365790811103, lng: Number(-123.42049545777795)},
        {lat: 48.43652548255677, lng: Number(-123.42042767822514)},
        {lat: 48.43651276424761, lng: Number(-123.42045232533526)},
        {lat: 48.43656999661369, lng: Number(-123.42052215881392)},
        {lat: 48.436541834663835, lng: Number(-123.42059952335403)},
        {lat: 48.4365500107154, lng: Number(-123.4206091083413)}
      ],
      lastCutDate: new Date(),
      lastTrimDate: new Date()
    },
    {
      locationName: `General's Office(2)`,
      locationGroup: `General's House`,
      polygonCoords: [
        {lat: 48.436484148038566, lng: Number(-123.42068373431711)},
        {lat: 48.43640375003682, lng: Number(-123.42058651516054)},
        {lat: 48.4363910316972, lng: Number(-123.42061253155453)},
        {lat: 48.43636332387485, lng: Number(-123.420580353383)},
        {lat: 48.43636150696795, lng: Number(-123.4205871998025)},
        {lat: 48.43636286964813, lng: Number(-123.42059541550584)},
        {lat: 48.436444176166596, lng: Number(-123.42069263466243)},
        {lat: 48.436459165622274, lng: Number(-123.42069742715607)},
        {lat: 48.436484148038566, lng: Number(-123.42068373431711)}
      ],
      lastCutDate: new Date(),
      lastTrimDate: new Date()
    },
    {
      locationName: 'Museum Parking Lot',
      locationGroup: `General's House`,
      polygonCoords:[
        {lat: 48.43630109477424, lng: Number(-123.42092130507676)},
        {lat: 48.436335673835345, lng: Number(-123.42086174321811)},
        {lat: 48.43630052837274, lng: Number(-123.42081480456177)},
        {lat: 48.436267162404704, lng: Number(-123.42078731192017)},
        {lat: 48.43623112713463, lng: Number(-123.42077524197998)},
        {lat: 48.4362044343255, lng: Number(-123.42077121866657)},
        {lat: 48.4361821903072, lng: Number(-123.42078060639784)},
        {lat: 48.43622445393367, lng: Number(-123.42083223891983)},
        {lat: 48.4362466979335, lng: Number(-123.42079435272193)},
        {lat: 48.436259599448924, lng: Number(-123.42081078124836)},
        {lat: 48.43623957985461, lng: Number(-123.42085101438235)},
        {lat: 48.436300083493286, lng: Number(-123.42092276347137)},
        {lat: 48.43630109477424, lng: Number(-123.42092130507676)}
      ],
      lastCutDate: new Date('May 1, 2022, 12:45:10'),
      lastTrimDate: new Date('May 1, 2022, 12:45:10')
    },
    {
      locationName: `General's Park(1)`,
      locationGroup: `General's House`,
      polygonCoords: [
        {lat: 48.43660349036499, lng: Number(-123.42101563496729)},
        {lat: 48.43668178861698, lng: Number(-123.42082788033387)},
        {lat: 48.43656656557929, lng: Number(-123.42067030055227)},
        {lat: 48.436537648559685, lng: Number(-123.42070986313574)},
        {lat: 48.43649538519377, lng: Number(-123.4207601545554)},
        {lat: 48.43658791967548, lng: Number(-123.4208962766646)},
        {lat: 48.43660349036499, lng: Number(-123.42101563496729)}
      ],
      lastCutDate: new Date(),
      lastTrimDate: new Date()
    },
    {
      locationName: `General's Park(2)`,
      locationGroup: `General's House`,
      polygonCoords: [
        {lat: 48.4367049221709, lng: Number(-123.42079435272233)},
        {lat: 48.43680724352172, lng: Number(-123.42055295390793)},
        {lat: 48.43676008675087, lng: Number(-123.42048925144303)},
        {lat: 48.436727165960356, lng: Number(-123.42047785205459)},
        {lat: 48.43670091828778, lng: Number(-123.42048321647269)},
        {lat: 48.436652871665544, lng: Number(-123.42053082568329)},
        {lat: 48.436571904106756, lng: Number(-123.4206582306131)},
        {lat: 48.4367049221709, lng: Number(-123.42079435272233)}
      ],
      lastCutDate: new Date(),
      lastTrimDate: new Date()
    },
    // ==================== data boilerplate ====================
    
    // {
    //   locationName: ``,
    //   locationGroup: ``,
    //   polygonCoords: [
    //     {},
    //     {}
    //   ],
    //   lastCutDate: new Date(),
    //   lastTrimDate: new Date()
    // },
  ]
  return newNadenCutList
}

function App() {
  const devMode = false;

  const [cutList, setCutList] = useState(setDefaultCuts());
  const [showImagePopup, setShowImagePopup] = useState(false)

  const updateCutDate = (cutName) => {
    console.log('there is a bug in updatecuts that must be fixed. cuts are currently updated by mapping the state and resetting state to new mapped obj. Should use prevState instead to prevent overwritten dates');
    const newCutList = cutList.map(cut => {
      if (cut.locationName === cutName) {
        return {
          locationName: cut.locationName,
          polygonCoords: cut.polygonCoords,
          lastCutDate: new Date(),
          lastTrimDate: cut.lastTrimDate
        }
      } else {
        return cut
      }
    })
    setCutList(newCutList);
    // ================================ TEST CODE ================================
    setTimeout(() => {
      const newCutList = cutList.map(cut => {
        if (cut.locationName === cutName) {
          return {
            locationName: cut.locationName,
            polygonCoords: cut.polygonCoords,
            lastCutDate: new Date('May 20, 2022,12:40:01'),
            lastTrimDate: cut.lastTrimDate
          }
        } else {
          return cut
        }
      })
      setCutList(newCutList)
    }, 3000)
    setTimeout(() => {
      const newCutList = cutList.map(cut => {
        if (cut.locationName === cutName) {
          return {
            locationName: cut.locationName,
            polygonCoords: cut.polygonCoords,
            lastCutDate: new Date("jan 1, 2022, 21:45:10"),
            lastTrimDate: cut.lastTrimDate
          }
        } else {
          return cut
        }
      })
      setCutList(newCutList)
    }, 7000)
  }
  const updateTrimDate = (cutName) => {
    console.log('Update Trims');
    const newCutList = cutList.map(cut => {
      if (cut.locationName === cutName) {
        return {
          locationName: cut.locationName,
          polygonCoords: cut.polygonCoords,
          lastCutDate: cut.lastCutDate,
          lastTrimDate: new Date()
        }
      } else {
        return cut
      }
    })
    setCutList(newCutList);
    // ================================ TEST CODE ================================
    setTimeout(() => {
      const newCutList = cutList.map(cut => {
        if (cut.locationName === cutName) {
          return {
            locationName: cut.locationName,
            polygonCoords: cut.polygonCoords,
            lastCutDate: cut.lastCutDate,
            lastTrimDate: new Date('May 20, 2022,12:40:01')
          }
        } else {
          return cut
        }
      })
      setCutList(newCutList)
    }, 3000)
    setTimeout(() => {
      const newCutList = cutList.map(cut => {
        if (cut.locationName === cutName) {
          return {
            locationName: cut.locationName,
            polygonCoords: cut.polygonCoords,
            lastCutDate: cut.lastCutDate,
            lastTrimDate: new Date("jan 1, 2022, 21:45:10")
          }
        } else {
          return cut
        }
      })
      setCutList(newCutList)
    }, 7000)
  }

  return (
    <div className="App">
      <Navbar 
      setCutList={setCutList}
        colville={colvilleCutList}
      />
      {/* <h1 className='bg-white-100 text-blue-300'>Hello</h1> */}
      <MapWindow 
        devMode={devMode}
        cutList={cutList}
        colville={colvilleCutList}
        naden={NadenCutList}
        updateCutDate={updateCutDate}
      />
      <CutsMenu
        cutList={cutList}
        updateCutDate={updateCutDate}
        updateTrimDate={updateTrimDate}
        setShowImagePopup={setShowImagePopup}
      />
      <BottomNav />
      {showImagePopup && <UploadImagePopup 
        setShowImagePopup={setShowImagePopup}
      />}
    </div>
  );
}

export default App;
