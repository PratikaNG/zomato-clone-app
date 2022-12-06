import React, { useState } from "react";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import TabOptions from "../components/common/tabOptions";
import Delivery from "../components/common/delivery";
import DiningOut from "../components/common/diningOut";
import Nightlife from "../components/common/nightlife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "DiningOut":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
