import React from "react";
import ProfileCard from "../../components/card/card";
import data from "../../data/data.json";
import "./home.view.css";
import Slider from "react-slick";
import HorizontalSlider from "../../components/slider/slider";
import { app } from "../../config/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { 
    getSubujectKnowsArray ,
    getTutorsForASubject,
    getSubjectsNeedsATutor,
    getTutorsForAStudent,
    getBestMatches
} from "../../controller/display.controller";




function Home() {

  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const [tutorNeedsSubjects, setTutorNeedsSubjects] = useState([]);
  const [bestMatches, setBestMatches] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    // getSubujectKnowsArray('amal2000@gmail.com').then((response) => {
    //   console.log("Subjects",response.data);
    // });
    getTutorsForAStudent('amal2000@gmail.com').then((response) => {
      console.log(response.data);
      setTutorNeedsSubjects(response.data);
    //   console.log("Tutors : " + tutorNeedsSubjects);
    });

    getBestMatches('amal2000@gmail.com').then((response) => {
        console.log(response.data);
        setBestMatches(response.data);
        // console.log("Best Matches : " + bestMatches);
    });
  },[]);


  return (
    <div>
      {user && bestMatches.length !==0 ? <div className="container">
        <h1 className="title">Best Matches</h1>
        <HorizontalSlider data={bestMatches} />
      </div> : null}

        <br />

      {user && tutorNeedsSubjects.length !== 0 ? <div className="container">
        <h1 className="title">Best Tutor for you</h1>
        <HorizontalSlider data={tutorNeedsSubjects} />
      </div> : null}

        <br />

      {/* <div className="container">
        <h1 className="title">Most Popular</h1>
        <HorizontalSlider data={data} />
      </div> */}
    </div>
  );
}

export default Home;
