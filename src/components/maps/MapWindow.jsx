import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api'

const apiKey = process.env.REACT_APP_API_KEY;
const devApiKey = process.env.REACT_APP_API_KEY_2;
// const { GoogleMap, LoadScript } = require("../../");
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const containerStyle = {
  width: '100%',
  height: '40vh',
  marginTop: 'var(--nav-height)',
};

const center = {
  lat: 48.43467084543356, 
  lng: Number(-123.41899931709301)
};

// const options = {
//   fillColor: "lightblue",
//   fillOpacity: 0.5,
//   strokeColor: "red",
//   strokeOpacity: 1,
//   strokeWeight: 2,
//   clickable: false,
//   draggable: false,
//   editable: false,
//   geodesic: false,
//   zIndex: 1
// }

function MapWindow(props) {
  // use key is dev only code. it sets the google maps api key to either 
  // a dev key set to my laptops IP, or a deployment key set to the final
  // deployed websites http address
  const useKey = props.devMode ? devApiKey : apiKey
  const [cutPolygons, setCutPolygons] = useState([]);
  
  // useJsApiLoader returns true if the app can load a google maps object
  // using the given api key
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
    // console.log(`polygon: ${polygon.id} has loaded!`);
  }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const dateTest = (date) => {
    const today = new Date();
    const timeDifference = today.getTime() - date.getTime();
    const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    console.log(differenceInDays , "between", today, 'and', date)
    if (differenceInDays > 14) {
      console.log('need to cut!!')
      return {
        result: 'overdue'
      }
    } else if (14 > differenceInDays && differenceInDays > 1) {
      console.log('cut soon')
      return {
        result: 'due'
      }
    } else {
      console.log("don't cut")
      return {
        result: 'cut_recently'
      }
    }
  }
  const testClick = () => {
    console.log('clicked!')
  }

  const formatCutList = (cutArr) => {
    const formattedCuts = cutArr.map((cutObj, x) => {
      const cutResult = dateTest(cutObj.lastCutDate).result
      const trimResult = dateTest(cutObj.lastTrimDate).result
      let polygonOptions = {
        fillColor: cutResult === 'overdue' ? 'rgb(255, 99, 99)' : 
          cutResult === 'due' ? 'yellow' : 
          cutResult === 'cut_recently' ? 'green' : '',
        fillOpacity: 0.5,
        strokeColor: trimResult === 'overdue' ? 'red' : 
        trimResult === 'due' ? 'orange' : 
        trimResult === 'cut_recently' ? 'green' : '',
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
      };
      return (
        <Polygon 
          key={`polygon-${x}_${cutObj.locationName}`}
          onLoad={loadPolygon}
          paths={cutObj.polygonCoords}
          options={polygonOptions}
          onClick={testClick}
        />
      )
    })
    return formattedCuts;
  }

  useEffect(() => {
    const formattedCutElements = formatCutList(props.cutList);
    setCutPolygons(formattedCutElements);
  }, [props.cutList])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {cutPolygons}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapWindow)