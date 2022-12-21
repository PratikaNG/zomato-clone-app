import React from "react";
import Slider from "react-slick";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";
import "./deliveryCollections.css";
import DeliveryItem from "./deliveryItem";

const deliveryItems = [
  //Ususally it comes from backend but we are hard coding it here since we are cloning the UI
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    // "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=2000",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    // "https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?w=2000",
  },
  {
    id: 3,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDX0XneRYSgXEqHux17JjPA3IShZ5NGWDSgg&usqp=CAU",
  },
  {
    id: 4,
    title: "Dosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png ",
  },
  {
    id: 5,
    title: "Biriyani",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe55efjPFtpTaBQje9abs7YzIvWgOWTQegQA&usqp=CAU",
  },
  {
    id: 6,
    title: "Chaat",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png ",
    // "https://www.jeyashriskitchen.com/wp-content/uploads/2022/06/IMG_6148.jpg",
  },
  {
    id: 7,
    title: "Momos",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png",
    // "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
  },
  {
    id: 8,
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
    // "https://static.toiimg.com/thumb/53251884.cms?imgsize=530171&width=800&height=800",
  },
  {
    id: 9,
    title: "Shake",
    cover:
      "https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
    // "https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg",
  },
  {
    id: 10,
    title: "Parathas",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    // "https://i.ndtvimg.com/i/2018-05/aloo-ka-paratha_650x400_61525766113.jpg",
  },
  {
    id: 11,
    title: "Pastry",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png",
    // "https://www.shutterstock.com/image-photo/sweet-pastries-puff-pastry-powdered-260nw-636014792.jpg",
  },
];

// https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png  -noodles
// https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png  --fried rice
// https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png  --dosa
// https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png  --thali
//  --shake
//  --chowmein
//   -- icecream
//  --sandwich

//this const settings has been copied from react slick documentation
// https://react-slick.neostack.com/docs/example/custom-arrows
const settings = {
  //   dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item} />;
            //   <div>{item.title}</div>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
