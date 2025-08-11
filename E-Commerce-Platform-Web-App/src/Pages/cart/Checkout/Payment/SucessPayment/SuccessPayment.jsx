import React, { useState } from "react";
import Sp from "../../../../../assets/success.png";

import "./SucessPayment.css"

const SucessPayment = () => {
  return (
    <div>
      <section id="aa">
        <img src={Sp}></img>
        <h1>Thank You</h1>
        <h3>Your payment was successfully done.</h3>
      </section>
    </div>
  );
};
export default SucessPayment;
