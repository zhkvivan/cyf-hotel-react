import React from "react";
import Card from "./Card";

const TouristInfoCards = () => {
  return (
    <div className="card-group container">
      <Card
        city="Glasgow"
        imgUrl="https://www.sesam-web.org/media/gallery/meetings_glasgow-city.jpg"
      />
      <Card
        city="Manchester"
        imgUrl="https://manchester-pass.com/wp-content/uploads/2019/11/view-from-1-st-peters-sq-manchester_small.png"
      />
      <Card
        city="London"
        imgUrl="https://img3.goodfon.ru/wallpaper/nbig/8/7a/london-angliya-reka-koleso.jpg"
      />
    </div>
  );
};

export default TouristInfoCards;
