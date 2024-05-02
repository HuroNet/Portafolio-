import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import hero from "../imagenes/2.jpg";
import skill1 from "../imagenes/Python.svg.png";
import skill2 from "../imagenes/jav.png";
import skill3 from "../imagenes/c.png";
import skill4 from "../imagenes/ard.png";
import skill5 from "../imagenes/css.png";
import skill6 from "../imagenes/html.png";
import skill7 from "../imagenes/sql.png";
import skill8 from "../imagenes/r.png";
import skill9 from "../imagenes/ts.png";
import skill10 from "../imagenes/sass.png";
import skill11 from "../imagenes/fl.png";
import skill12 from "../imagenes/dj.png";
import skill13 from "../imagenes/as.png";
import skill14 from "../imagenes/vite.png";
import skill15 from "../imagenes/boo.png";
import skill16 from "../imagenes/ang.png";
import skill17 from "../imagenes/git.png";
import skill18 from "../imagenes/tal.png";
import skill19 from "../imagenes/gh.png";
import skill20 from "../imagenes/mq.png";
import skill21 from "../imagenes/vc.png";
import skill22 from "../imagenes/mg.png";
/*import skill11 from "../imagenes/psh.png";*/
import pdf from "../imagenes/CV.pdf";

const Home = () => {
  return (
    <>
      <div className="welcome" id="home">
        <div className="perfil">
          <h3>WELCOME TO MY SELF</h3>
          <h1>
            Hi, I'm <span> Carlos Paredes</span>
          </h1>
          <h2>
            a
            <span>
              <Typewriter
                words={[" IT Engineer", " Developer"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <button className="">
            <a href={pdf} download>
              Resume
            </a>
          </button>
          <p>
            I am a <span>Full-stack</span> developer specialized in application
            and website development. My passion is creating innovative digital
            solutions that provide unique experiences to users. With one year of
            experience in the industry, I have worked on projects of varying
            scale. My approach focuses on understanding user needs and
            translating them into intuitive and efficient products. I use modern
            technologies and agile methodologies to ensure quality and timely
            delivery of projects.
          </p>
        </div>

        <div className="foto">
          <img src={hero} />
        </div>
      </div>

      <div className="findme hero_btn d_flex">
        <h4> FIND WITH ME</h4>
        <div className="button1">
          <button className="btn_shadow">
            <a href="https://www.instagram.com/andres_walls_/?hl=es-la">
              <i>
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>
          </button>
          <button className="btn_shadow">
            <a href="http://wa.me/5930984508977">
              <i>
                <FontAwesomeIcon icon={faWhatsapp} />
              </i>
            </a>
          </button>

          <button className="btn_shadow">
            <a href="https://www.linkedin.com/in/carlos-paredes-4b1871259/">
              <i>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
            </a>
          </button>

          <button className="btn_shadow">
            <a href="https://github.com/Carlos-An20?tab=repositories">
              <i>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
