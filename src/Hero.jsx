import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Single-origin coffee deep v sus small batch. Gorp core vape lumber
            sexual norm core four dollar toast drinking vinegar. Twee 90's t aiy
            aki small batch bitters, bespoke ji an bing leggings marxism key tar
            pabst ad a pto gen mix tape tumblr stump town. DSA twee iceland
            tacos swag tote bag. Solar punk man bun fingers tache retro pin te
            rest.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
