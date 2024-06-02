import React from "react";
import ProfileCard from "../../components/card/card";
import data from "../../data/data.json";
import "./home.view.css";
import Slider from "react-slick";
import HorizontalSlider from "../../components/slider/slider";

function Home() {
  return (
    <div>
      <div className="container">
        <h1 className="title">Best Matches</h1>
        <HorizontalSlider data={data} />
      </div>

      <div className="container">
        <h1 className="title">Best Matches</h1>
        <HorizontalSlider data={data} />
      </div>

      <div className="container">
        <h1 className="title">Best Matches</h1>
        <HorizontalSlider data={data} />
      </div>
    </div>
  );
}

export default Home;
