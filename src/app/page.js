import GeoloniaMap from "./components/GeoloniaMap";
import GeoloniaMapList from "./components/GeoloniaMapList";
import Header from "./header/Header";
import SearchNav from "./components/searchNav";

export default function Page() {
  return (
    <main>
      <Header />
      <SearchNav />
      <div >
        <GeoloniaMap />
        <GeoloniaMapList />
      </div>
    </main>
  );
}
