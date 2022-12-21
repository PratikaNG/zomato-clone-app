import React from "react";
import "./delivery.css";
import Filters from "../filters";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./deliveryCollections/topBrands";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: Filters,
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and hygenic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-sr-sort-alt absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great offers",
  },
];

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
    </div>
  );
};

export default Delivery;
