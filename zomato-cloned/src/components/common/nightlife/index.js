import React from "react";
import Collection from "../collection";
import "./nightlife.css";
import Filters from "../filters";
import ExploreSection from "../exploreSection";
import { nightlife } from "../../../data/nightLife";

const collectionList = [
  {
    id: "1",
    title: "Finest Microbreweries",
    cover:
      "https://b.zmtcdn.com/data/collections/06ec1c3471d9d7f7047298eb9ef2de56_1665565737.jpg",
    places: "12 places",
  },
  {
    id: "2",
    title: "Best Bars &amp; Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/b80f739090610e0212597384dd08d834_1665569124.jpg",
    places: "10 places",
  },
  {
    id: "3",
    title: "Lit Party Places",
    cover:
      "https://b.zmtcdn.com/data/collections/8e46a581134a20b56489e22029095060_1669368401.jpg",
    places: "15 places",
  },
  {
    id: "4",
    title: "Best Bars &amp; Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/08f7a8086de7ea36c15770ff7126bb46_1665575340.jpg",
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
const nightFilters = [
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
const nightList = nightlife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightFilters} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName="Nightlife Restaurants in Lucknow"
      />
    </div>
  );
};

export default Nightlife;
