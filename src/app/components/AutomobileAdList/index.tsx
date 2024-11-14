import { AutomobileAd } from "@/app/models/AutomobileAd";
import styles from "./styles.module.scss";
import { AUTOMOBILE_AD_GETT_ALL } from "@/app/api/apiRoutes";
import CarImage from "../CarImage";
import Link from "next/link";

async function fetchAutomobileAds() {
  const response = await fetch(AUTOMOBILE_AD_GETT_ALL(0, 50), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch automobile ads");
  }
  const result = await response.json();
  return result.data;
}

const AutomobileAdList = async () => {
  const data: AutomobileAd[] = await fetchAutomobileAds();

  return (
    <div className={styles.container}>
      {data.map((car: AutomobileAd) => (
        <Link href={`/automobileAd/${car.id}`} key={car.id}>
          <div className={styles.card}>
            <CarImage imageUrl={car.images[0]?.imageUrl} alt={car.title} />
            <div className={styles.carDetails}>
              <h3 className={styles.carTitle}>{car.title}</h3>
              <p className={styles.carPrice}>{car.price} KM</p>
              <p className={styles.carLocation}>{car.user.adress}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AutomobileAdList;
