import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ image, follows, title }) {
  return (
    <div className={styles.wrapper}>
      
      {/* CARD */}
      <div className={styles.card}>
        
        {/* IMAGE (80%) */}
        <div className={styles.imageSection}>
          <img src={image} alt={title} />
        </div>

        {/* CHIP (20%) */}
        <div className={styles.chipSection}>
          <Chip
            label={`${follows} Follows`}
            size="small"
            className={styles.chip}
          />
        </div>

      </div>

      {/* TITLE BELOW CARD */}
      <p className={styles.title}>{title}</p>

    </div>
  );
}

export default Card;
