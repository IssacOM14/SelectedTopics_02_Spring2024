import React, { useEffect, useRef, useState } from "react";
import { Feature } from "../../components";
import "./features.css";
import { Waypoint } from 'react-waypoint';


const featuresData = [
  {
    title: "Test 02",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "AAAAAAA",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const Features = () => {

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="features">
      <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Learn about our purification process:
        </h1>
        <Waypoint onEnter={handleVideoPress} onLeave={handleVideoPress}>
          <video ref={videoRef} className="gpt3__features-video" onClick={handleVideoPress} src={"https://files.catbox.moe/luo5g9.mp4"}></video>
        </Waypoint>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
    </section>
    
  );
};

export default Features;
