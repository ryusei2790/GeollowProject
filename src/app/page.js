import React, { useEffect } from "react";

function GeoloniaMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://cdn.geolonia.com/v1/embed?geolonia-api-key=${process.env.REACT_APP_GEOLONIA_API_KEY}`;
    document.body.appendChild(script);

    // クリーンアップ
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="geolonia"
      data-lat="35.681236"
      data-lng="139.767125"
      data-zoom="12"
      style={{ width: "100%", height: "400px" }}
    ></div>
  );
}

export default GeoloniaMap;
