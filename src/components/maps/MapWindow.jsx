import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Polygon } from '@react-google-maps/api'

const apiKey = process.env.REACT_APP_API_KEY;
const devApiKey = process.env.REACT_APP_API_KEY_2;
// const { GoogleMap, LoadScript } = require("../../");
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const containerStyle = {
  width: '100%',
  height: '50vh',
};

const center = {
  lat: 48.43467084543356, 
  lng: Number(-123.41899931709301)
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

  const formatCutList = (cutArr) => {
    const formattedCuts = cutArr.map((cutObj, x) => {
      const result = dateTest(cutObj.lastCutDate).result
      let polygonOptions = {};
      if (result === 'overdue') {
        polygonOptions = {
          fillColor: 'red',
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
      } 
      if (result === 'due') {
        polygonOptions = {
          fillColor: 'orange',
          fillOpacity: 0.5,
          strokeColor: "orange",
          strokeOpacity: 1,
          strokeWeight: 2,
          clickable: false,
          draggable: false,
          editable: false,
          geodesic: false,
          zIndex: 1
        }
      } 
      if (result === 'cut_recently') {
        polygonOptions = {
          fillColor: 'lightgreen',
          fillOpacity: 0.5,
          strokeColor: "green",
          strokeOpacity: 1,
          strokeWeight: 2,
          clickable: false,
          draggable: false,
          editable: false,
          geodesic: false,
          zIndex: 1
        }
    }
      // console.log(result.result)
      return (
        <Polygon 
          key={`polygon-${x}_${cutObj.locationName}`}
          onLoad={loadPolygon}
          paths={cutObj.polygonCoords}
          options={polygonOptions}
        />
      )
    })
    // console.log(formattedCuts)
    return formattedCuts;
    setCutPolygons(formattedCuts)
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