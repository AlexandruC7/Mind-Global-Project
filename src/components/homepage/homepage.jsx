import "./homepage.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <video src="./video-bg.mp4" autoPlay muted loop class="video-bg" />
      <div className="bg-overlay"></div>
      <div className="home-text">
        <div className="home-btn">
          <h1 className="homepage__h1">Mind Global</h1>
          <p className="homepage__p">
            Design grafic - dezvoltare web - promovare tv / radio / web
          </p>
          <div className="home-btn">
            <a href="https://www.youtube.com/" className="homepage__a">
              Aflați mai multe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
