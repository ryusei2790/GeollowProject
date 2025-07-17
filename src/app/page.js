import GeoloniaMap from "./components/GeoloniaMap";
import Header from "./header/Header";
import SearchNav from "./components/searchNav";

export default function Page() {
  return (
    <main>
      <Header />
      <SearchNav />
      {/* <h1>地図表示</h1>
      <GeoloniaMap /> */}
    </main>
  );
}
