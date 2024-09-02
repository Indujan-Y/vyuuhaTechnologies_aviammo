import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./Vyuuha.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage from "../company-assets/bannerImage.png";import pic1 from "../company-assets/pic1.png";
import pic2 from "../company-assets/pic2.png";
import pic3 from "../company-assets/pic3.png";

const Vyuuha = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const projects = [
    {
      title: "Renewable Energy from Poultry Waste",
      description:
        "Transform poultry waste into renewable energy, reduce ammonia levels, and promote eco-friendly agriculture.",
      imageUrl: pic1,
      buttonText: "Learn More",
      route: "/aviammo",
    },
    {
      title: "Workplace Stress Management",
      description:
        "Develop personalized coping mechanisms for managing workplace stress, enhancing both employee well-being and productivity.",
      imageUrl: pic2,
    },
    {
      title: "Military Parachute Safety Enhancement",
      description:
        "Ensure the safety of military personnel with a reliable automatic activation device for parachutes.",
      imageUrl: pic3,
    },
    {
      title: "AI-Enhanced Maritime Operations",
      description:
        "Improve situational awareness in maritime law enforcement with AI and wearable tech for the Indian Coast Guard.",
    },
  ];

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="company-page">
      <header className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </header>
      <section className="works">
        <h2>Our Works</h2>
        <Slider {...sliderSettings} className="slider">
          {projects.map((project, index) => (
            <div key={index} className="slider-item">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
        <div className="project-details">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.buttonText && (
                <button
                  className="btn-learn-more"
                  onClick={() => handleButtonClick(project.route)}
                >
                  {project.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vyuuha;