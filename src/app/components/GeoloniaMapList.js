import config from './GeoloniaMap.json';
import styles from './GeoloniaMapList.module.css';

export default function GeoloniaMapList() {
  const { lat, lng, zoom, width, height, listings } = config;

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2>地図設定</h2>
        <ul>
          <li>緯度: {lat}</li>
          <li>経度: {lng}</li>
          <li>ズーム: {zoom}</li>
          <li>幅: {width}</li>
          <li>高さ: {height}</li>
        </ul>
      </div>
      <div className={styles["appMain__list"]}>
        <div className={styles["appMain__list--header"]}>
          <h2>Rental Listings</h2>
          <div className={styles["appMain__list--meta"]}>
            <span>{listings.length} rentals available</span>
            <span className={styles["appMain__list--sort"]}>Sort: Homes for You ▼</span>
          </div>
        </div>
        <div className={styles["appMain__list--cards"]}>
          {listings.map((item, idx) => (
            <div className={styles["appMain__list--card"]} key={idx}>
              <div className={styles["appMain__list--card_image"]}>
                <img src={item.image} alt="物件画像" />
                <span className={styles["appMain__list--card_badge"]}>{item.badge}</span>
                <button className={styles["appMain__list--card_fav"]}>♡</button>
              </div>
              <div className={styles["appMain__list--card_body"]}>
                <div className={styles["appMain__list--card_title"]}>{item.title}</div>
                <div className={styles["appMain__list--card_address"]}>{item.address}</div>
                <div className={styles["appMain__list--card_options"]}>
                  {item.options.map((opt, i) => (
                    <div className={styles["appMain__list--card_option"]} key={i}>
                      <div className={styles["appMain__list--card_option_price"]}>{opt.price}</div>
                      <div className={styles["appMain__list--card_option_label"]}>{opt.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 