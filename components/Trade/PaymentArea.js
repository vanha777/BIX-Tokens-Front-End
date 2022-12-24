const PaymentArea = () => {
  return (
    <>
      <div className='payment-method-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Payment Methods</h2>
          </div>
          <ul className='payment-method-list'>
            <li title='Visa'>
              <img src='/images/payment/visa.png' alt='image' />
            </li>
            <li title='iDeal'>
              <img src='/images/payment/ideal.png' alt='image' />
            </li>
            <li title='PayPal'>
              <img src='/images/payment/paypal.png' alt='image' />
            </li>
            <li title='Google Pay'>
              <img src='/images/payment/google-pay.png' alt='image' />
            </li>
            <li title='American Express'>
              <img src='/images/payment/american-express.png' alt='image' />
            </li>
            <li title='Apple Pay'>
              <img src='/images/payment/apple-pay.png' alt='image' />
            </li>
            <li title='Stripe'>
              <img src='/images/payment/stripe.png' alt='image' />
            </li>
            <li title='Giro Pay'>
              <img src='/images/payment/giro-pay.png' alt='image' />
            </li>
            <li title='Master Card'>
              <img src='/images/payment/master-card.png' alt='image' />
            </li>
            <li title='Skrill'>
              <img src='/images/payment/skrill.png' alt='image' />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PaymentArea;
