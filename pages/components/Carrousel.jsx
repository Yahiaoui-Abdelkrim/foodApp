import React, { useState } from "react";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from "../../styles/Carroussel.module.css";
import { IconContext } from "react-icons";

const Carrousel = () => {
  const imgs = ["/images/pizza1.png", "/images/pizza2.png", "/images/pizza3.png"];
  const [index, setIndex] = useState(0);
  const handleButton = (d) => {
    if (d === "l") {
      setIndex(index !== 0 ? index - 1 : imgs.length - 1);
    }
    if (d === "r") {
      setIndex(index !== imgs.length - 1 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={`${styles.container} `}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <IconContext.Provider value={{ color: "white" }}>
          <AiFillCaretLeft size={80} onClick={() => handleButton("l")} />
        </IconContext.Provider>
      </div>
      <div className={styles.wrapper} style={{ transform: `translatex(${-100 * index}vw)` }}>
        {imgs.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="scale-down" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <IconContext.Provider value={{ color: "white" }}>
          <AiFillCaretRight size={80} onClick={() => handleButton("r")} />
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default Carrousel;
