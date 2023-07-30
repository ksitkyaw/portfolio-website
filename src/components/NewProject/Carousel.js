import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.scss";

export default function MyCarousel({ active, data }) {
  const Data = data[active];
  return (
    <Carousel>
      {Data.images.map((d) => {
        return (
          <div>
            <img src={d} />
            <a href={Data.url}>
              <p className="legend">{Data.brief}</p>
            </a>
          </div>
        );
      })}
    </Carousel>
  );
}
