import React from "react";
import Image from "next/image";
import styles from "../../styles/Pizzacard.module.css";

const PizzaCard = () => {
  return (
    <div className={` card m-5 m-md-0 ${styles.clickEvent}`}>
      <Image
        src="/images/pizza1.png"
        height={500}
        width={500}
        objectFit="scale-down"
        className="card-img-top p-5"
      />
      <div class="card-body text-center">
        <h3 className="text-danger">La Pizza</h3>
        <h5 class="card-title fw-bold">16.86$</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
      </div>
    </div>
  );
};

export default PizzaCard;
