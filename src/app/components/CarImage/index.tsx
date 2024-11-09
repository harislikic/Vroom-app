import styles from "./styles.module.scss";
import React from "react";

interface CarImageProps {
  imageUrl: string;
  alt: string;
}

const CarImage = ({ imageUrl, alt }: CarImageProps) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fullImageUrl = imageUrl
    ? `${BASE_URL}${imageUrl}`
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/800px-No-Image-Placeholder.svg.png";

  return <img src={fullImageUrl} alt={alt} className={styles.carImage} />;
};

export default CarImage;
