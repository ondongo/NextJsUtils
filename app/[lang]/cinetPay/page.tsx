"use client";
import Head from "next/head";
import { useEffect } from "react";
import { checkout } from "./checkout";

const CheckoutPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.cinetpay.com/seamless/main.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>SDK SEAMLESS</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">SDK SEAMLESS</h1>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
