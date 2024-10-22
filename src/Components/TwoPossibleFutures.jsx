import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CompCSS/TimeTravel.css';
import "../CompCSS/TwoBrightFutures.css";

export default function TwoBrightFutures() {
  const navigate = useNavigate();

  return (
    <>
      <link rel='stylesheet' type="text/css" href='../CompCSS/TwoBrightFutures.css' />
      <div className='Choice'>
        <button id='FutureCityFirst' onClick={() => navigate('/FutureCity')}>
          WonderCity
        </button>
        <button id='FutureCitySecond' onClick={() => navigate('/FutureCity2')}>
          Wonderland
        </button>
      </div>
    </>
  );
}
