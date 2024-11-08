import styles from "./styles.module.scss";

const cars = [
  {
    id: 1,
    title: "2018 Audi A4",
    price: "$24,500",
    location: "New York, NY",
    image:
      "https://s9.pik.ba/galerija/2021-04/11/04/slika-1359-607308c7dfbac-velika.jpg",
  },
  {
    id: 2,
    title: "2020 BMW 3 Series",
    price: "$35,000",
    location: "Los Angeles, CA",
    image:
      "https://s9.pik.ba/galerija/2021-04/11/04/slika-1359-607308c7dfbac-velika.jpg",
  },
  {
    id: 3,
    title: "2019 Mercedes-Benz C-Class asdasda dasdasdasd dasdasd asdas d",
    price: "$40,000",
    location: "Miami, FL",
    image:
      "https://s9.pik.ba/galerija/2021-04/11/04/slika-1359-607308c7dfbac-velika.jpg",
  },
  {
    id: 4,
    title: "2017 Toyota Camry",
    price: "$16,500",
    location: "Chicago, IL",
    image:
      "https://s9.pik.ba/galerija/2021-04/11/04/slika-1359-607308c7dfbac-velika.jpg",
  },
  {
    id: 5,
    title: "2021 Tesla Model 3",
    price: "$45,000",
    location: "San Francisco, CA",
    image:
      "https://s9.pik.ba/galerija/2021-04/11/04/slika-1359-607308c7dfbac-velika.jpg",
  },
];

const AdCard = () => {
  return (
    <div className={styles.container}>
      {cars.map((car) => (
        <div key={car.id} className={styles.card}>
          <img src={car.image} alt={car.title} className={styles.carImage} />
          <div className={styles.carDetails}>
            <h3 className={styles.carTitle}>{car.title}</h3>
            <p className={styles.carPrice}>{car.price}</p>
            <p className={styles.carLocation}>{car.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdCard;
