
import AdCard from "./components/AdCard";
import NavBar from "./components/NavBar";
import HomePageBrandSection from "./pages/HomePageBrandSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePageBrandSection />
      <AdCard/>
    </div>
  );
}
