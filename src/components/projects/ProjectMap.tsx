import { useState, useEffect, useRef } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  Source,
  Layer,
} from "react-map-gl/maplibre";
import { MapProvider } from "react-map-gl/maplibre";
import type { MapRef } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

/** Percorre recursivamente arrays de coordenadas e retorna [minLng, minLat, maxLng, maxLat] */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function calcBbox(geojson: any): [number, number, number, number] | null {
  let minLng = Infinity,
    minLat = Infinity,
    maxLng = -Infinity,
    maxLat = -Infinity;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function walk(coords: any) {
    if (typeof coords[0] === "number") {
      const [lng, lat] = coords as [number, number];
      if (lng < minLng) minLng = lng;
      if (lat < minLat) minLat = lat;
      if (lng > maxLng) maxLng = lng;
      if (lat > maxLat) maxLat = lat;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (coords as any[]).forEach(walk);
    }
  }

  const features =
    geojson.features ?? (geojson.type === "Feature" ? [geojson] : []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  features.forEach((f: any) => {
    if (f.geometry?.coordinates) walk(f.geometry.coordinates);
  });

  if (!isFinite(minLng)) return null;
  return [minLng, minLat, maxLng, maxLat];
}
interface ProjectMapProps {
  longitude: number;
  latitude: number;
  label: string;
  zoom?: number;
  boundaryUrl?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  boundaryData?: any;
}

export default function ProjectMap({
  longitude,
  latitude,
  label,
  zoom,
  boundaryUrl,
  boundaryData,
}: ProjectMapProps) {
  const [showPopup, setShowPopup] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [boundary, setBoundary] = useState<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<MapRef | null>(null);

  // Efeito 0: impede o canvas do mapa de roubar o foco na montagem
  useEffect(() => {
    const id = setTimeout(() => {
      mapRef.current?.getCanvas()?.blur();
    }, 0);
    return () => clearTimeout(id);
  }, []);

  // Efeito 1a: usa GeoJSON local quando fornecido diretamente
  useEffect(() => {
    if (boundaryData !== undefined) setBoundary(boundaryData);
  }, [boundaryData]);

  // Efeito 1b: busca o GeoJSON quando a URL muda
  useEffect(() => {
    if (!boundaryUrl) {
      if (boundaryData === undefined) setBoundary(null);
      return;
    }
    let cancelled = false;
    fetch(boundaryUrl)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setBoundary(data);
      })
      .catch(() => {
        if (!cancelled) setBoundary(null);
      });
    return () => {
      cancelled = true;
    };
  }, [boundaryUrl, boundaryData]);

  // Efeito 2: centraliza o mapa quando o boundary E o mapa estão prontos
  useEffect(() => {
    if (!mapLoaded || !boundary || !mapRef.current) return;
    const bbox = calcBbox(boundary);
    if (!bbox) return;
    mapRef.current.fitBounds(
      [
        [bbox[0], bbox[1]],
        [bbox[2], bbox[3]],
      ],
      { padding: 20, duration: 600 },
    );
  }, [boundary, mapLoaded]);

  const initialViewState = {
    longitude,
    latitude,
    zoom: zoom ?? 0,
  };

  return (
    <MapProvider>
      <Map
        ref={mapRef}
        mapStyle={MAP_STYLE}
        initialViewState={initialViewState}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
        onLoad={() => setMapLoaded(true)}
      >
        <NavigationControl position="top-right" showCompass={false} />

        {boundary && (
          <Source id="boundary" type="geojson" data={boundary}>
            <Layer
              id="boundary-fill"
              type="fill"
              paint={{
                "fill-color": "#1e3a5f",
                "fill-opacity": 0.1,
              }}
            />
            <Layer
              id="boundary-line"
              type="line"
              paint={{
                "line-color": "#1e3a5f",
                "line-width": 2,
                "line-opacity": 0.5,
              }}
            />
          </Source>
        )}

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
