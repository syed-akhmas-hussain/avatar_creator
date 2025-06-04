import "./../css/Intro.css";
import introImg from "./../assets/introImg.jpg";

const Intro: React.FC = () => {
  return (
    <div id="cont">
      <div id="img-cont">
        <img id="img" alt="intro_img" src={introImg}></img>
      </div>
      <div id="txt-cont">
        <div id="intro-heading">
          <p>INTRODUCTION</p>
        </div>
        <p id="intro-content">
          We at Snazzy Avatar are revolutionising how people construct digital
          personas. With the help of our AI-powered avatar generator, users can
          easily create distinctive, customised avatars without the need for
          sophisticated tools or design knowledge. Our platform, which was
          developed for gamers, content producers, and online communities,
          provides a wide range of personalisation choices, such as facial
          characteristics, hairstyles, attire, and accessories. Through clever,
          intuitive tools, Snazzy Avatar empowers users to realise their ideas,
          emphasising creativity, simplicity, and AI integration. Whether you're
          creating a digital mascot, social media persona, or in-game persona,
          Snazzy Avatar allows you to design characters that accurately
          reflect who you are.
        </p>
        <div id="btn3">
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};
export default Intro;
