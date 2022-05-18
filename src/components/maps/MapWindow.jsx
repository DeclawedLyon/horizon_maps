import React, { useEffect, useState } from 'react'
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

const defaultCoords = () => {
  return [
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
}

function MapWindow(props) {
  const useKey = props.devMode ? devApiKey : apiKey
  const [cutPolygons, setCutPolygons] = useState([]);
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

  const formatCutList = (cutArr) => {
    // console.log('loaded');
    console.log(cutArr);
    const formattedCuts = cutArr.map((cutObj, x) => {
      console.log('-----------',cutObj.polygonCoords);
      return (
        <Polygon 
          key={`polygon-${x}_${cutObj.locationName}`}
          onLoad={loadPolygon}
          paths={cutObj.polygonCoords}
          options={options}
        />
      )
    })
    console.log(formattedCuts)
    return formattedCuts;
    setCutPolygons(formattedCuts)
  }

  useEffect(() => {
    const formattedCutElements = formatCutList(props.cutList);
    setCutPolygons(formattedCutElements);
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {cutPolygons}
        {/* {props.cutList.map(outline => {
          return (
            <Polygon
              onLoad={loadPolygon}
              paths={cutPolygons}
              options={options}
            />
          )
        })} */}
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