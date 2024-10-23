import Content from "@/components/content/Content";
import HeaderBanner from "@/components/layout/Header/HeaderBanner";
import HeaderSlider from "@/components/layout/Header/HeaderSlider";
import Mainheader from "@/components/layout/Header/Mainheader";
import Slidemassage from "@/components/layout/Marqueemsg/Slidemassage";

import Providedetails from "@/components/Providedetail/Providedetails";

import React from "react";

const page = () => {
  return (
    <div>
      <Mainheader />
      <div className="sticky top-0 z-50 bg-white shadow">
        <HeaderBanner />
      </div>
      <HeaderSlider />
      <Slidemassage />
      <Content />
      <Providedetails />
    </div>
  );
};

export default page;
