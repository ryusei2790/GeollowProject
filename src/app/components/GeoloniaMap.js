'use client';
import { useEffect, useRef } from 'react';
import config from './GeoloniaMap.json';

export default function GeoloniaMap() {
  const mapRef = useRef(null);
  const apiKey = process.env.NEXT_PUBLIC_GEOLONIA_API_KEY;
  const lat = config.lat ?? 35.681236;
  const lng = config.lng ?? 139.767125;
  const zoom = config.zoom ?? 12;
  const width = '100%';
  const height = '100%';

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;
    const script = document.createElement('script');
    script.src = `https://cdn.geolonia.com/v1/embed?geolonia-api-key=${apiKey}`;
    script.async = true;
    mapRef.current.appendChild(script);
    return () => {
      if (mapRef.current) mapRef.current.innerHTML = '';
    };
  }, [apiKey]);

  return (
    <div
      ref={mapRef}
      className="geolonia"
      data-lat={lat}
      data-lng={lng}
      data-zoom={zoom}
      style={{ width, height }}
    />
  );
}



