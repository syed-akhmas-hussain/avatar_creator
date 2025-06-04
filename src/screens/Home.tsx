import { forwardRef } from "react";
import "./../css/Home.css";
type homeProps = {};

const Home = forwardRef<HTMLElement, homeProps>((_props, ref) => {
  return (
    <section id="proj-intro" ref={ref}>
      <section id="first">
        <div id="name">
          <div className="centre-div">
            <p>SNAZZY AVATAR</p>
          </div>
        </div>
        <p id="vert-logo-name">SNAZZY</p>
      </section>
    </section>
  );
});
export default Home;
