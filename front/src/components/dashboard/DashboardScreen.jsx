import React from "react";
import Visitors from "./Visitors";
import Sales from "./Sales";
import TotalRevenue from "./TotalRevenue";
import Customers from "./Customers";
import TargetReality from "./TargetReality";
import TopProducts from "./TopProducts";
import SalesMap from "./SalesMap";
import VolumeServices from "./VolumeServices";

const DashboardScreen = () => {
  return (
    <div className="contents-area lg:ml-[calc(20%+14px)]  lg:w-[calc(80%-28px)] mt-[14px]">
      <div className="area-row are-one mt-[14px] lg:grid lg:grid-cols-[4fr_3fr] flex flex-wrap gap-x-[14px]">
        <Sales />
        <Visitors />
      </div>
      <div
        className="area-row are-two lg:grid lg:grid-cols-[3fr_2fr_2fr]
        flex flex-wrap ">
        <TotalRevenue />
        <Customers />
        <TargetReality />
        <TopProducts />
        <SalesMap />
        <VolumeServices />
      </div>
    </div>
  );
};

export default DashboardScreen;
