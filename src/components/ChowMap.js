import React from 'react';
import './ChowMap.css';
import { Wrapper } from "@googlemaps/react-wrapper";

const markers = [
  { lat: 43.08400302747437, lng: -77.6800637907594},
  { lat: 43.08317908060919, lng: -77.680805067302 }
];

//API
const Map = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  React.useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

const Marker = (options) => {
  const [marker, setMarker] = React.useState();
  const contentRef = React.useRef(null);

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      const infowindow = new window.google.maps.InfoWindow({
        content: `CHOW`
      });
      marker.setOptions(options);

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          shouldFocus: false
        });
      });
    }
  }, [marker, options]);

  return null;
};

export default function App() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Wrapper apiKey={"AIzaSyDNDoGpMBytyRLvWZkkBO9nVLyx3Fm4I9M"}>
        <Map
          center={{ lat: 43.08372751410854, lng: -77.68044042842241 }}
          zoom={15}
          style={{ flexGrow: "1", height: "100%" }}
        >
          {markers.map((marker) => {
            return <Marker position={marker} />;
          })}
        </Map>
      </Wrapper>
    </div>
  );
}