import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css";
import photo from "../assets/Ram Gupta.png";

function Home() {
  return (
    <>
      <Navbar />
      <div className="HeroSection">
        <div className="left">
          <div className="left-content">
            <h1>Hi, I am </h1>
            <h1 style={{ color: "#EB5C76" }}>Ram Gupta</h1>
          </div>
          <br></br>
          <h2>Flutter Developer</h2>
        </div>
        <div className="right">
          <img src={photo} alt="Ram Gupta" height={500} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
