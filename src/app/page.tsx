
import AutomobileAdList from "./components/AutomobileAdList";
import NavBar from "./components/NavBar";
import HomePageBrandSection from "./pages/HomePageBrandSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePageBrandSection />
      <AutomobileAdList />
    </div>
  );
}
