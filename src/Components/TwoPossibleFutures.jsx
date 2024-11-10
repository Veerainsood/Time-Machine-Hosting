import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../CompCSS/TwoBrightFutures.module.css";

export default function TwoBrightFutures() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.choice}>
        <button className={styles.FutureCityFirst} onClick={() => navigate('/FutureCity')}>
          WonderCity
        </button>
        <button className={styles.FutureCitySecond} onClick={() => navigate('/FutureCity2')}>
          Wonderland
        </button>
      </div>
    </>
  );
}
