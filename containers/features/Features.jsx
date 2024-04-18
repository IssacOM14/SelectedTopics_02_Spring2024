import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Desinfecion",
    text: "El cloro se utiliza para reducir o eliminar microorganismos en el agua, aunque no la purifica completamente. La concentración de cloro residual debe ser de 0.5 a 1.5 mg/l según las normas mexicanas.",
  },
  {
    title: "Filtracion de agua con medios granulares",  
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Carbon activado granular",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Suavizacion",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const Features = () => {
  return (
    <section id="features">
      <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Nuestro proceso y compromiso con nuestros clientes
        </h1>
        <p>Request Early Access to Get Started</p>
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
