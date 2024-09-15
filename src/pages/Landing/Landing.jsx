import "./landing.css"
import spaceman from "../../assets/spaceman.jpg";

function Landing() {

  return (
    <section className="landing">
      <img src={spaceman} alt="" />
      <div className="landing-container">
        <h1> An intro of <br />
          <span className="special-text">
            space exploration <br /> 
             & technology</span>
        </h1>
      </div>
    </section>
  )
}

export default Landing;
