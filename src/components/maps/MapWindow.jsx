import React from 'react'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api'

const apiKey = process.env.REACT_APP_API_KEY;
// const { GoogleMap, LoadScript } = require("../../");
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 48.43467084543356, 
  lng: -123.41899931709301
};

const nadenBaseballField = [
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
]
const nadenSouthOfBBallField = [
  {lat: 48.433220067255604, lng: -123.42013400241261},
  {lat: 48.433097649335174, lng: -123.41817540960528},
  {lat: 48.433050565441114, lng: -123.41816121690377},
  {lat: 48.433088232559854, lng: -123.41883537022514},
  {lat: 48.43297523111984, lng: -123.4188992373819},
  {lat: 48.433092940947745, lng: -123.41995659364385},
  {lat: 48.43233959333703, lng: -123.42009142430813},
  {lat: 48.43233959333703, lng: -123.42025464037539},
  {lat: 48.433220067255604, lng: -123.42013400241261}
]
const fireHallEast = [
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
]
const nadenCuts = [
  nadenBaseballField,
  nadenSouthOfBBallField,
  fireHallEast
]

const paths = [
  {lat: 48.43467084543356, lng: -123.41899931709301},
  {lat: 48.53467084543356, lng: -123.51899931709301},
  {lat: 48.33467084543356, lng: -123.31899931709301},
  {lat: 48.43467084543356, lng: -123.41899931709301},
]
const options = {
  fillColor: "lightblue",
  fillOpacity: 0.5,
  strokeColor: "red",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1
}

function MapWindow() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const loadPolygon = polygon => {
    console.log("polygon: ", polygon);
  }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {nadenCuts.map(outline => {
          return (
            <Polygon
              onLoad={loadPolygon}
              paths={outline}
              options={options}
            />
          )
        })}
        {/* <Polygon
        onLoad={loadPolygon}
        paths={nadenBaseballField}
        options={options}
        /> */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapWindow)