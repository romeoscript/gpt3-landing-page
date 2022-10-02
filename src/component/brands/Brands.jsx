import React from "react";
import "./brand.css";
import { atlassian, slack, shopify, dropbox, google } from "./imports";

const Brands = () => {
  return (
    <div className="gpt3__brands section__padding">
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={google} alt="google" />
      </div>
    </div>
  )
  ;
};

export default Brands;
