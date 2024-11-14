import { AUTOMOBILE_AD_GET_BY_ID } from "@/app/api/apiRoutes";
import { AutomobileAd } from "@/app/models/AutomobileAd";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import ImageCarousel from "@/app/components/ImageCarousel";

const fetchAutomobileAdById = async (id: string | string[] | undefined) => {
  if (!id) return null;
  const response = await fetch(AUTOMOBILE_AD_GET_BY_ID(id), {
    cache: "no-store",
  });


  if (!response.ok) {
    throw new Error("Failed to fetch automobile ad");
  }
  const result = await response.json();

  console.log("data", result);
  return result;
};

const AutomobileAdDetails = () => {
  const router = useRouter();

  const { id } = router.query;

  const [data, setData] = useState<AutomobileAd | null>(null);

  useEffect(() => {
    if (id) {
      fetchAutomobileAdById(id)
        .then((result) => {
          setData(result);
         
        })
        .catch(() => {

        });
    }
  }, [id]);

  return (
    <div className={styles.automobileAdDetails}>
      <h1>{data?.title}</h1>
      <div className={styles.automobileAdInfo}>
        <div className={styles.automobileAdImages}>
        <ImageCarousel images={data?.images || []} />
        </div>
        <div className={styles.automobileAdSummary}>
          <p className={styles.price}>{data?.price} KM</p>
          <p className={styles.description}>{data?.description}</p>
          <p>
            <strong>Brand:</strong> {data?.carBrand?.name}
          </p>
          <p>
            <strong>Fuel Type:</strong> {data?.fuelType?.name}
          </p>
          <p>
            <strong>Year:</strong> {data?.yearOfManufacture}
          </p>
          <p>
            <strong>Mileage:</strong> {data?.milage} km
          </p>
          <p>
            <strong>Engine Power:</strong> {data?.enginePower} kW
          </p>
          <p>
            <strong>Color:</strong> {data?.color}
          </p>
          <p>
            <strong>Location:</strong> {data?.user?.adress}
          </p>
          <div className={styles.automobileAdEquipment}>
            <strong>Equipment:</strong>
            <ul>
              {data?.automobileAdEquipments?.map((item) => (
                <li key={item.equipment.id}>{item.equipment.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomobileAdDetails;
