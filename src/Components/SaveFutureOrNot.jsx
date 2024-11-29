import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../CompCSS/FutureChoice.module.css"

export default function FutureChoice () {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.Choice}>
        <button className={styles.DestroyedButton}
            onClick={() => navigate('/Destroyed')}
        >I Will not Change My Habbits</button>
        <button className={styles.SaveButton}
            onClick={() => navigate('/TwoBrightFuture')}
        >I Will Save Nature</button>
      </div>
    </>
  );
};
