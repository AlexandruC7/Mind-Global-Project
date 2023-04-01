import "./homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <video src="./video-bg.mp4" autoPlay muted loop class="video-bg" />

      <div className="bg-overlay"></div>

      <div className="home-text">
        <h1>Mind Global</h1>

        <p> Design grafic - dezvoltare web - promovare tv / radio / web</p>
        <div className="home-btn">
          {" "}
          <a href="#">Aflați mai multe</a>
        </div>
      </div>
    </div>
  );
};
