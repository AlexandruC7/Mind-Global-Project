import "./homepage.css";

import React from "react";

export const Homepage = () => {
  return (
    <div className="homepage">
      <video src="./video-bg.mp4" autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>
      <div className="home-text">
        <h1 className="homepage__h1">MIND GLOBAL</h1>

        <p className="homepage__p">ORIZONTURI NOI PENTRU AFACERI DE SUCCES!</p>

        <div className="home-btn">
          <a href="https://www.youtube.com/" className="homepage__a">
            Aflați mai multe
          </a>
        </div>
      </div>
    </div>
  );
};
