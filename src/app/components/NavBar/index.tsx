import styles from "./styles.module.scss";
import NavBarLinks from "../NavBarLinks";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.logo}>vrm</div>
      <NavBarLinks />
    </div>
  );
};

export default NavBar;
