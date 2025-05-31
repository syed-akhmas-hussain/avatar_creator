import "./../css/thirdPage.css";
import introImg from './../assets/introImg.jpg';

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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          similique magnam ut excepturi tempore quia impedit. Iure dolore
          assumenda tenetur quo, laborum in tempora non asperiores reprehenderit
          commodi recusandae quia. Consectetur, dolor, laboriosam itaque ipsam
          rem corrupti earum aut consequuntur quas animi id sequi totam,
          delectus mollitia! Ut, consequatur accusantium earum quia labore et
          cumque suscipit aut deserunt eos enim. Non nisi, temporibus in rem
          placeat modi voluptates facilis praesentium distinctio corporis quae
          labore, consectetur iure! Consequuntur, praesentium culpa, ut est,
          explicabo iure rerum harum repudiandae obcaecati sed vero nam? Numquam
          reiciendis quaerat dicta repellat. Fugit culpa tempore qui, tenetur
          quia ducimus possimus voluptatibus veniam doloribus odit libero
          maxime, itaque eum mollitia. Libero harum inventore, debitis eveniet
          ea quas odio! Fuga doloremque omnis esse beatae reprehenderit quos
          error facere magnam, quo excepturi rerum nostrum voluptates natus ex
          expedita, fugit vitae saepe quisquam! Nostrum provident nesciunt
          quidem voluptate fugiat facilis sapiente!
        </p>
        <div id="btn">
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};
export default Intro;
