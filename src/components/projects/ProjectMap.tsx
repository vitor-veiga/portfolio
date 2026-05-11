import { useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/maplibre";
import { MapProvider } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

interface ProjectMapProps {
  longitude: number;
  latitude: number;
  zoom?: number;
  label: string;
}

export default function ProjectMap({
  longitude,
  latitude,
  zoom = 12,
  label,
}: ProjectMapProps) {
  const [showPopup, setShowPopup] = useState(true);
  const initialViewState = {
    longitude,
    latitude,
    zoom,
  };

  return (
    <MapProvider>
      <Map
        mapStyle={MAP_STYLE}
        initialViewState={initialViewState}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        <NavigationControl position="top-right" showCompass={false} />

        <Marker
          longitude={longitude}
          latitude={latitude}
          anchor="center"
          onClick={() => setShowPopup(true)}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#1e3a5f",
              border: "3px solid #ffffff",
              boxShadow: "0 0 12px rgba(226,232,240,0.6)",
              cursor: "pointer",
            }}
          />
        </Marker>

        {showPopup && (
          <Popup
            longitude={longitude}
            latitude={latitude}
            anchor="bottom"
            offset={16}
            closeOnClick={false}
            onClose={() => setShowPopup(false)}
            style={{ fontFamily: "inherit" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#1e3a5f",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 12, color: "#0f2133", fontWeight: 600 }}>
                {label}
              </span>
            </div>
          </Popup>
        )}
      </Map>
    </MapProvider>
  );
}
