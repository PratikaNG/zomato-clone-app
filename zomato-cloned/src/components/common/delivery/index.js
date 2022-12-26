import React from "react";
import { restaurants } from "../../../data/restaurants";
import "./delivery.css";
import Filters from "../filters";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./deliveryCollections/topBrands";
import ExploreSection from "../exploreSection";

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

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantsList}
        collectionName="Delivery restaurants in Lucknow"
      />
    </div>
  );
};

export default Delivery;
