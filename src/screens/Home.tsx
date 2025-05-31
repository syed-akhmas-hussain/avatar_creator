import { forwardRef } from "react";
import "./../css/Home.css";
type homeProps = {};

const Home = forwardRef<HTMLElement, homeProps>((_props, ref) => {
  return (
    <section id="proj-intro" ref={ref}>
      <section id="first">
        <div id="name">
          <div className="centre-div">
            <p>GENERATING</p>
          </div>
          <div className="centre-div">
            <p>CHARACTER\AVATAR</p>
          </div>
          <div id="flex-end">
            <h4>Supervisor: M. Faizan Khan</h4>
          </div>
        </div>
        <p id="vert-logo-name">SNAZZY</p>
      </section>
    </section>
  );
});
export default Home;
