import React from "react";
import ProfileCard from "../../components/card/card";
import data from "../../data/data.json";
import "./home.view.css";
import Slider from "react-slick";
import HorizontalSlider from "../../components/slider/slider";
import { app } from "../../config/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

function Home() {

  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);


  return (
    <div>
      {user ? <div className="container">
        <h1 className="title">Best Matches</h1>
        <HorizontalSlider data={data} />
      </div> : null}

        <br />

      {user ? <div className="container">
        <h1 className="title">Best Tutor for you</h1>
        <HorizontalSlider data={data} />
      </div> : null}

        <br />

      <div className="container">
        <h1 className="title">Most Popular</h1>
        <HorizontalSlider data={data} />
      </div>
    </div>
  );
}

export default Home;
