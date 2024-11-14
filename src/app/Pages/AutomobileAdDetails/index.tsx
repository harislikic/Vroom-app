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
  return await response.json();
};

const AutomobileAdDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<AutomobileAd | null>(null);

  useEffect(() => {
    if (id) {
      fetchAutomobileAdById(id).then(setData).catch(console.error);
    }
  }, [id]);

  return (
    <div className={styles.automobileAdDetails}>
      <h1 className={styles.title}>{data?.title}</h1>
      <p className={styles.price}>{data?.price} KM</p>

      <div className={styles.imageContainer}>
        <ImageCarousel images={data?.images || []} />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.details}>
          <p>
            <strong>Location:</strong> {data?.user?.adress}
          </p>
          <p>
            <strong>Status:</strong> {data?.status}
          </p>
          <p>
            <strong>Posted on:</strong>{" "}
            {new Date(data?.dateOFadd || "").toLocaleDateString()}
          </p>
          <p>
            <strong>Listing ID:</strong> {data?.id}
          </p>
          <p>
            <strong>Views:</strong> {data?.viewsCount}
          </p>
        </div>

        <div className={styles.specs}>
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
            <strong>Registered:</strong> {data?.registered}
          </p>
          <p>
            <strong>Registration expiration date:</strong>{" "}
            {new Date(
              data?.registrationExpirationDate || ""
            ).toLocaleDateString()}
          </p>
          <p>
            <strong>Date of last small service:</strong>{" "}
            {new Date(data?.last_Small_Service || "").toLocaleDateString()}
          </p>
          <p>
            <strong>Date of last big service expiration date:</strong>{" "}
            {new Date(data?.last_Big_Service || "").toLocaleDateString()}
          </p>
        </div>

        <div className={styles.equipment}>
          <strong>Additional Equipment:</strong>
          <ul>
            {data?.automobileAdEquipments?.map((item) => (
              <li key={item.equipment.id}>{item.equipment.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.description}>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default AutomobileAdDetails;
