import React, { useEffect, useRef, useState } from "react";
import "./Project.scss";

export default function ProjectCard({ url, name, des, rank }) {
  const [imagesrc, setImagesrc] = useState(null);
  const fetch = false;

  function callback(DataUri) {
    const binary = atob(DataUri.split(",")[1]);
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      array[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([array], { type: "image/jpeg" });
    const imgUrl = URL.createObjectURL(blob);
    console.log(imgUrl);
    setImagesrc(imgUrl);
  }

  useEffect(() => {
    fetch
      ? window
          .GrabzIt("NzkyOGMzNjUwMGIxNDk5ZTk1YTVmMDMwZDJhNDk0ODg=")
          .ConvertURL(url)
          .DataURI(callback)
      : setImagesrc("assets/headerBg.png");
  }, []);

  return (
    <div className={rank ? `cardContainer ${rank}` : "cardContainer"}>
      <a target="_blank" href={url} rel="noreferrer">
        {imagesrc && <img className="cardImage" src={imagesrc} alt="project" />}
        {/* <div ref={ref} id="datauri"></div> */}
      </a>
      <div className="cardContent">
        <h4>{name}</h4>
        <p>{des}</p>
      </div>
    </div>
  );
}
