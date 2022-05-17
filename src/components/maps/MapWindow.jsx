import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

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

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapWindow)