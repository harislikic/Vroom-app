import styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <div className={styles.nabBarContainer}>
      <div className={styles.logo}>vrm</div>
      <div className={styles.navBarSection}>
        <div className={styles.aboutSection}>About</div>

        <div className={styles.publishSection}>Publish</div>

        <div className={styles.profileSection}>Profile</div>
      </div>
    </div>
  );
};

export default NavBar;
