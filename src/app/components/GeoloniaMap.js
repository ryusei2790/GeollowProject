// src/app/components/GeoloniaMap.js
import config from "./GeoloniaMap.json";

export default async function GeoloniaMap() {
  const apiKey = process.env.NEXT_PUBLIC_GEOLONIA_API_KEY;
  if (!apiKey) {
    return <div>APIキーが設定されていません</div>;
  }

  const html = `
    <div
      class="geolonia"
      data-lat="${config.lat}"
      data-lng="${config.lng}"
      data-zoom="${config.zoom}"
      style="width: ${config.width}; height: ${config.height};"
    ></div>
    <script type="text/javascript" src="https://cdn.geolonia.com/v1/embed?geolonia-api-key=${apiKey}"></script>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
