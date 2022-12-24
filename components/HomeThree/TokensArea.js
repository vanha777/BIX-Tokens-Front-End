import React, { useState, useEffect } from 'react';

const TokensArea = () => {
  const [ action, setAction ] = useState({});
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');


  const comingSoonTime = () => {
    let endTime = new Date('February 23, 2023 17:00:00 PDT');
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let countdays = Math.floor(timeLeft / 86400);
    let counthours = Math.floor((timeLeft - countdays * 86400) / 3600);
    let countminutes = Math.floor(
      (timeLeft - countdays * 86400 - counthours * 3600) / 60
    );
    let countseconds = Math.floor(
      timeLeft - countdays * 86400 - counthours * 3600 - countminutes * 60
    );
    if (counthours < '10') {
      counthours = '0' + counthours;
    }
    if (countminutes < '10') {
      countminutes = '0' + countminutes;
    }
    if (countseconds < '10') {
      countseconds = '0' + countseconds;
    }

    setDays(countdays);
    setHours(counthours);
    setMinutes(countminutes);
    setSeconds(countseconds);
  };

  useEffect(() => {
    setInterval(() => {
      comingSoonTime();
    }, 1000);

    return () => {
      setAction({});
    };
  }, []);
  return (
    <>
      <div className='tokens-area pb-100'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='tokens-image'>
                <img src='/images/animations.gif' alt='image' />
              </div>
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='tokens-content'>
                <h2>Internal-Sales Ends in</h2>
                <p>
                This is a private event for internal audiences only, not for the general public. Unauthorized access is prohibited and will result in exclusion. 
                </p>
                <div id='countdown'>
                  <ul>
                    <li>
                      <span id='days'>{days}</span>DAYS
                    </li>
                    <li>
                      <span id='hours'>{hours}</span>HOURS
                    </li>
                    <li>
                      <span id='minutes'>{minutes}</span>MIN
                    </li>
                    <li>
                      <span id='seconds'>{seconds}</span>SEC
                    </li>
                  </ul>
                </div>
                <div className='token-price'>
                  <div className='d-flex'>
                    <div className='box'>
                      <span>Token Price</span>
                      <h3>1 BIX=$0.01</h3>
                    </div>
                    <div className='box'>
                      <span>We Accept</span>
                      <div>
                        <img src='/images/ethereum.png' alt='image' /> ETH
                      </div>
                    </div>
                  </div>
                </div>
                <div className='total-price'>
                  <span>
                    Tokens Available On Pre-Sale <span>100,000,000 ICOX</span>
                  </span>
                </div>
                <div className='btn-box'>
                  <a href='/'/*buy.html'*/ className='default-btn'>
                    <i className='bx bxs-discount'></i> Buy Tokens 55% Off
                  </a>
                  <a href='#' target='_blank' className='default-btn'>
                    <i className='bx bxs-file'></i> White Pappers
                  </a>
                </div>
                <div className='payment-methods'>
                  <img src='/images/master-card.png' alt='image' />
                  <img src='/images/paypal.png' alt='image' />
                  <img src='/images/bitcoin2.png' alt='image' />
                  <img src='/images/visa.png' alt='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokensArea;
