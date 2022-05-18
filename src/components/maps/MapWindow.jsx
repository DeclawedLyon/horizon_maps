import React from 'react'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api'

const apiKey = process.env.REACT_APP_API_KEY;
const devApiKey = process.env.REACT_APP_API_KEY_2;
// const { GoogleMap, LoadScript } = require("../../");
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const containerStyle = {
  width: '100vw',
  height: '60vh',
  marginTop: '2em',
};

const center = {
  lat: 48.43467084543356, 
  lng: -123.41899931709301
};

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

function MapWindow(props) {
  const useKey = props.devMode ? devApiKey : apiKey
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: useKey
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
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {props.cutList.map(outline => {
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