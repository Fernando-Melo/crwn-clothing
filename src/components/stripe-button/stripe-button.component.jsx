import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey= 'pk_test_51JpbaQHXglVNzg9tjQ9pUq85eRvf5jwGtxXHgJrULBF8d0kv0xPWxloI1GKcm0FT9uMqOXfoCiacslcOvOT416I500G8FdPRdp';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
