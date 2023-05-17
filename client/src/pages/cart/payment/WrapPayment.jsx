import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";
import axios from "axios";
import { useSelector } from "react-redux";

function WrapPayment() {

  const { isAuthenticated } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/a1/v1/stripeapikey" , { withCredentials: "include" },);

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    getStripeApiKey();
  }, []);

  return (
    <>
      {stripeApiKey && isAuthenticated && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Payment />
        </Elements>
      )}
    </>
  );
}
export default WrapPayment;
