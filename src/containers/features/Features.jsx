import React, { useEffect, useRef, useState } from "react";
import { Feature } from "../../components";
import "./features.css";
import { Waypoint } from 'react-waypoint';


const featuresData = [
  {
    title: "1. Water Collection",
    title2: "2. Raw water",
    text: "Water collection refers to the initial stage where water is gathered from its source. Raw water is the untreated water collected from its natural source.",
  },
  {
    title: "3. Hydropneumatic",
    title2: "4. Sand and activated carbon filter",
    text: "Hydropneumatic refers to a system that utilizes both hydraulic and pneumatic principles. Sand and activated carbon filters are a specific type of filtration system used to remove impurities and contaminants.",
  },
  {
    title: "5. Water softener",
    title2: "6. Electrolysis",
    text: "Water softening is a process used to reduce the hardness of water by removing minerals. Electrolysis can be used for several purposes, including disinfection and the removal of specific contaminants.",
  },
  {
    title: "7. Purified water",
    title2: "8. Ozonification",
    text: "Purified water refers to water that has undergone thorough treatment to remove impurities and contaminants. Ozonation, is a water treatment process to disinfect and oxidize water.",
  },
  {
    title: "9. Ultraviolet light",
    title2: "10. Washing",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
  {
    title: "11. Filling",
    title2: "12. Delivery",
    text: "These final steps are to fill the containers with purified water and deliver them",
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
          <video ref={videoRef} className="gpt3__features-video" onClick={handleVideoPress} src={"https://files.catbox.moe/2o6qwj.mp4"}></video>
        </Waypoint>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            title2={item.title2}
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
