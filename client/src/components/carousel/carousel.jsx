import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const data = [
  {
    id: 1,
    image:
      "https://www.luxurycards.ro/wp-content/uploads/2014/06/Untitled-1.jpg)",
  },
  {
    id: 2,
    image:
      "https://fuel.ro/wp-content/uploads/2022/01/panouri-personalizate-personalizate.jpg",
  },
  {
    id: 3,
    image: "https://www.axilon.ro/images/placute-gravate-sedii-firme.jpg",
  },
  {
    id: 4,
    image:
      "https://sdeals.machteamsoft.ro/teamdeals/pictures/deals/704/2528704/deal-v15860824961.jpg",
  },
  {
    id: 5,
    image:
      "https://www.coala.ro/upload/portofoliu/12@Pliante%20A4%20impaturite-Belvedere-size4-41515.jpg",
  },
  {
    id: 6,
    image:
      "https://construct.md/public/prod_orig_wm/00b28c6a89c7c334c26f92a3950dce8f.jpg",
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
    <div className="lucrari-precedente" id="lucrari-precedente">
      <h1>Lucrari precedente</h1>
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
    </div>
  );
};
