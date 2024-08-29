import "./landing.css"
import spaceman from "../../assets/spaceman.jpg";


function Landing() {

  return (
    <section className="landing">
      <img src={ spaceman } alt="" />
      <div className="landing-container">
        <h1> A dive into <br />
          <span className="special-text">
           space exploration <br /
           >cutting edge technology<br /> 
           initiatives shaping our future</span>
        </h1>
      </div>
    </section>
  )
}

export default Landing;
