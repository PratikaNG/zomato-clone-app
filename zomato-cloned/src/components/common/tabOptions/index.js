import React from "react";
import "./tabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQSgofn4zMiXU5myR7H_aeSQIZpqHxzu5iA&usqp=CAU",
    backdrop: "#FCEEC0",
    inactive_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gKKG9acTbGJMKvKuTugIdaRHbqdQAPSkXA&usqp=CAU",
  },
  {
    id: 2,
    name: "DiningOut",
    active_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIIXPqcc9rcabZWR1A3qPuQHpwOJogHUvdg&usqp=CAU",
    backdrop: "#E5F3F3",
    inactive_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAlqIfgNPKJj3OH2gbY6C2KFRXi5DolBPLg&usqp=CAU",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwKOpm4e96vdu3JRW5et_Dft1dY1HNnPU_g&usqp=CAU",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdZ8b8mPWgwX9TUpgrMdHeMZRowsETx-LRQ&usqp=CAU",
    backdrop: "#EDf4FF",
    inactive_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5c15w9k41sE2tmf1Cs3szu1PzzBAZX8bdg&usqp=CAU",
  },
];
const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-Options">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => (
          <div
            onClick={() => setActiveTab(tab.name)}
            className={`tab-item absolute-center cursor-pointer ${
              activeTab === tab.name && "active-tab"
            }`}
          >
            <div
              className="tab-image-container absolute-center"
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
            >
              <img
                className="tab-image"
                alt="{tab.name}"
                src={activeTab === tab.name ? tab.active_img : tab.inactive_img}
              />
            </div>
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabOptions;
