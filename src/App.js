import "./App.css";
import { isMobile } from "react-device-detect";
import cn from "classnames";

function App() {
  return (
    <div className={cn("app", { "app-mobile": isMobile })}>
      <header>
        <img src="/logos/logo.png" alt="logo" class="logo" />
      </header>
      <div>
        <h1 className={cn("app-header", { "app-mobile-header": isMobile })}>
          <span>Niclas</span>
          <br />
          <span>Haumann</span>
        </h1>
        <h4>
          <span>Born digital</span>
        </h4>
      </div>
      <div className="container">
        <h2>About</h2>
        <p>
          born sometime in 1995. raised in the heart of copenhagen. and
          currently working at{" "}
          <a href="https://www.noaignite.dk" target="_blank">
            noa ignite
          </a>{" "}
          as a producer where we solve complex problems and help companies stand
          out through meaningful and distinctive digital experiences.
        </p>
        <br />
        <p>
          i am passionate about everything i do and firmly believe that success
          does not come without failure. i enjoy a challenge - and have been
          fortunate to play a small part in many projects from problem to
          solution together with some of the greatest creative people in the
          business.
        </p>
        <br />
        <p>
          a few clients i have worked with are{" "}
          <a href="https://www.loegismose.dk" target="_blank">
            løgismose
          </a>
          ,{" "}
          <a href="https://www.danskmetal.dk" target="_blank">
            dansk metal
          </a>
          ,{" "}
          <a href="https://maersktankers.com" target="_blank">
            maersk tankers
          </a>
          ,{" "}
          <a href="https://www.hamburgsud.com" target="_blank">
            hamburg süd
          </a>
          ,{" "}
          <a href="https://www.lunar.app" target="_blank">
            lunar
          </a>
          ,{" "}
          <a href="https://www.postnord.dk" target="_blank">
            postnord
          </a>
          ,{" "}
          <a href="https://www.welltec.com" target="_blank">
            welltec
          </a>{" "}
          and{" "}
          <a href="https://northrisk.dk" target="_blank">
            north risk
          </a>
          .
        </p>
        <br />
        <p>
          on the personal side you should know that my dream car is a nero
          ferrari enzo and my favourite tv-show is larry david.
        </p>

        <h3>Experience</h3>
        <div className="experience">
          <p>producer, noa ignite</p>
          <p className="dates">
            2022 - <span className="valid">present</span>
          </p>
        </div>
        <div className="experience">
          <p>junior producer, noa ignite</p>
          <p className="dates">2021 - 2022</p>
        </div>
        <div>
          <h3>Get in touch</h3>
          <p>
            send me a mail at{" "}
            <a href={`mailto:niclashaumann@icloud.com`}>
              niclashaumann@icloud.com
            </a>{" "}
            or call/text me at <a href={`tel:+4540590995`}>+45 40590995</a>.
            <br />
            <br />
            or find me on{" "}
            <a
              href="https://www.linkedin.com/in/niclashaumann/"
              target="_blank"
            >
              linkedin
            </a>
            ,{" "}
            <a href="https://www.instagram.com/niclashaumann/" target="_blank">
              instagram
            </a>{" "}
            and{" "}
            <a
              href="https://music.apple.com/profile/niclashaumann"
              target="_blank"
            >
              apple music
            </a>
            .
          </p>
        </div>
      </div>
      <div className="outro">
        <span>© niclashaumann, 2023</span>
      </div>
    </div>
  );
}
export default App;
