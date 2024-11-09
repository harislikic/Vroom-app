"use client";

import { useAutomobileAds } from "@/app/hooks/useAutomobileAds";
import styles from "./styles.module.scss";
import { AutomobileAd } from "@/app/models/AutomobileAd";
import CarImage from "../CarImage";
import { CircularProgress } from "@mui/material";

const AutomobileAdList = () => {
  const { data, isLoading } = useAutomobileAds();

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <CircularProgress size={40} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data?.map((car: AutomobileAd) => (
        <div key={car.id} className={styles.card}>
          <CarImage imageUrl={car.images[0]?.imageUrl} alt={car.title} />
          <div className={styles.carDetails}>
            <h3 className={styles.carTitle}>{car.title}</h3>
            <p className={styles.carPrice}>{car.price} KM</p>
            <p className={styles.carLocation}>{car.user.adress}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutomobileAdList;
