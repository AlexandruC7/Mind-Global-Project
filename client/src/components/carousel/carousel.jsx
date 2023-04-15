import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const data = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Title 1",
    description: "Description 1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Title 2",
    description: "Description 2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Title 3",
    description: "Description 3",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Title 4",
    description: "Description 4",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Title 5",
    description: "Description 5",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    title: "Title 6",
    description: "Description 5",
  },
];

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="carousel-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};
