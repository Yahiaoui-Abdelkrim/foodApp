import React from "react";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
import styles from "../../styles/Carroussel.module.css";

const Carrousel = () => {
  const images = ["../images/image.avif", "../images/image1.avif", "../images/image2.avif"];
  return (
    <div className={styles.container}>
      <AiFillCaretLeft />
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          {images.map((img, i) => {
            <Image src="pages\images\image1.avif" layout="fill" />;
          })}
        </div>
      </div>
      <AiFillCaretRight />
    </div>
  );
};
export default Carrousel;
