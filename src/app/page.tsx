import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import HomePageBrandSection from "./Pages/HomePageBrandSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePageBrandSection />
    </div>
  );
}
