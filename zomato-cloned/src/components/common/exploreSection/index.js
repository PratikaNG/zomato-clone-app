import React from "react";
// import ExploreCard from "./exploreCard";
import "./exploreSection.css";
import "./exploreCard/exploreCard.css";

const ExploreSection = ({ list, collectionName }) => {
  console.log(list, collectionName);
  list.map((item) => {
    console.log(item);
  });
  // console.log(restuarant);
  // const name = restuarant?.info?.name ?? "";
  // const coverImg = restuarant?.info?.image?.url;
  // const deliveryTime = restuarant?.order?.deliveryTime;
  // const rating = restuarant?.info?.rating?.rating_text;
  // const approxPrice = restuarant?.info?.cfo?.text;
  // const offers = restuarant?.bulkOffers ?? [];
  // const cuisines = restuarant?.info?.cuisine
  //   ?.map((item) => item.name)
  //   .slice(0, 3);

  // const bottomContainers = restuarant?.bottomContainers;
  // const goldOff = restuarant?.gold?.text;
  // const proOff = offers.length > 1 ? offers[0].text : null;
  // const discount =
  //   offers.length > 1
  //     ? offers[1].text
  //     : offers.length === 1
  //     ? offers[0].text
  //     : null;
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((item) => (
          <div className="explore-card cursor-pointer">
            <div className="explore-card-cover">
              <img
                src={item.info.image.url}
                alt={item.name}
                className="explore-cover-image"
              />
              <div className="delivery-time"> {item.order.deliveryTime}</div>
              {item.bulkOffers.length === 1 && (
                <div className="pro-Off">{item.bulkOffers[0].text}</div>
              )}
              {item.gold.text && (
                <div className="gold-Off absolute-center">
                  {" "}
                  {item.gold.text}
                </div>
              )}
              {item.bulkOffers.length === 1 && (
                <div className="discount absolute-center">
                  {" "}
                  {item.bulkOffers[0].text}
                </div>
              )}
            </div>
            <div className="res-row">
              <div className="res-name">{item.name}</div>
              {item.info.rating.rating_text && (
                <div className="res-rating absolute-center">
                  {item.info.rating.rating_text}{" "}
                  <i className="fi fi-rr-star absolute-center"></i>
                </div>
              )}
            </div>
            <div className="res-row">
              {item.info.cuisine.length > 0 && (
                <div className="res-cuisine">
                  {item.info.cuisine.map((j, i) => {
                    return (
                      <span className="res-cuisine-tag">
                        {j.name}
                        {i !== item.info.cuisine.length - 1 && ","}
                      </span>
                    );
                  })}
                </div>
              )}
              {item.info.cfo.text && (
                <div className="res-price">{item.info.cfo.text}</div>
              )}
            </div>
            {item.bottomContainers.length > 0 && (
              <div>
                <div className="separator"></div>
                <div className="explore-bottom">
                  <img
                    src={item.bottomContainers[0].image.url}
                    style={{ height: "18px" }}
                    alt={item.bottomContainers[0].text}
                  />
                  <div className="res-bottom-text">
                    {item.bottomContainers[0].text}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;

// {i !== item.info.cuisine.length - 1 && ","}
