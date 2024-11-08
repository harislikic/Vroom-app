import Link from 'next/link';
import styles from "./styles.module.scss";

const NavBarLinks = () => {
  return (
    <div className={styles.navBarSection}>
    <Link href="/about">
      <div className={styles.aboutSection}>About</div>
    </Link>

    <Link href="/publish">
      <div className={styles.publishSection}>Publish</div>
    </Link>

    <Link href="/profile">
      <div className={styles.profileSection}>Profile</div>
    </Link>
  </div>
  );
};

export default NavBarLinks;