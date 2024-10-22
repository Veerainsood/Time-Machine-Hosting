import React, { useState } from 'react';
import '../CompCSS/TimeTravel.css'; // Ensure to create this CSS file for styling
import { useNavigate } from 'react-router-dom';

import "../CompCSS/FutureChoice.css"

export default function FutureChoice () {
  const navigate = useNavigate();

  return (
    <>
      <link rel='stylesheet' type="text/css" href='../CompCSS/FutureChoice.css'></link>
      <div className='Choice'>
        <button id="DestroyedButton"
            onClick={() => navigate('/Destroyed')}
        >I Will not Change My Habbits</button>
        <button id="SaveButton"
            onClick={() => navigate('/TwoBrightFuture')}
        >I Will Save Nature</button>
      </div>
    </>
  );
};
