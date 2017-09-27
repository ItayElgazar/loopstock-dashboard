import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const UserMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      this.setState({ markers: [] })
      console.log(this.props);
    }

  })
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
     
        <Marker
          position={{ lat: props.latitude, lng: props.longitude }}
        />
      
    </MarkerClusterer>
  </GoogleMap>

);


export default UserMap;