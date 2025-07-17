import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__nav}>
        <ul>
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
          <li>Get a mortgage</li>
          <li>Find an Agent</li>
        </ul>
      </div>
      <div className={styles.header__title}>
        <h1>Geollow</h1>
      </div>
      <div className={styles.header__help}>
        <ul>
          <li>Manage Rentals</li>
          <li>Advertise</li>
          <li>Help</li>
          <li>Sign In</li>
        </ul>
      </div>
    </header>
  );
} 