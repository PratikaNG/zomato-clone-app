import React from "react";
import Collection from "../collection";
import Filters from "../filters";
import "./diningOut.css";
import ExploreSection from "../exploreSection";
import { diningOut } from "../../../data/diningOut";

const collectionList = [
  {
    id: "1",
    title: "trending this week",
    cover:
      "https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
    places: "12 places",
  },
  {
    id: "2",
    title: "New Year's Eve",
    cover:
      "https://b.zmtcdn.com/data/collections/2f73fc62448e6b688dd3f04b3c692595_1671530925.jpg",
    places: "10 places",
  },
  {
    id: "3",
    title: "Royal Dining",
    cover:
      "https://b.zmtcdn.com/data/collections/abffefda0704ad70cf8f6e1327694a0f_1665837901.jpg",
    places: "15 places",
  },
  {
    id: "4",
    title: "Insta-worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/d096431eeca5c4022d876c8f7b94ed06_1665825405.jpg",
    places: "09 places",
  },
  {
    id: "5",
    title: "Serene Rooftops",
    cover: "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70",
    places: "12 places",
  },
  {
    id: "6",
    title: "Legends of Lucknow",
    cover:
      "https://b.zmtcdn.com/data/collections/c5486fcf2915a39135abfab9d23da999_1665916803.jpg",
    places: "12 places",
  },
  {
    id: "7",
    title: "Serene Rooftops",
    cover:
      "https://b.zmtcdn.com/data/collections/aad3a4b320a3ed15bc3b18b90377567f_1618831521.jpg",
    places: "54 places",
  },
  {
    id: "8",
    title: "Best Bars &amp; Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "126 places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
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

const diningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Dine-Out restaurants in Lucknow"
      />
    </div>
  );
};

export default DiningOut;
