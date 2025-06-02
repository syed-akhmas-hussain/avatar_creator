import { forwardRef } from "react";
import "./../css/Footer.css";
type FooterProps = {};

const Footer = forwardRef<HTMLElement, FooterProps>((_props, ref) => {
  return (
    <section id="footCont" ref={ref}>
      <div id="eachmem">
        <p className="name">Usama Mir</p>
        <p className="gmail">example@gmail.com</p>
        <p className="phone">(+92)300-123456</p>
      </div>

      <div id="eachmem">
        <p className="name">Danish Raza</p>
        <p className="gmail">example@gmail.com</p>
        <p className="phone">(+92)300-123456</p>
      </div>

      <div id="eachmem">
        <p className="name">Abdul Qavi</p>
        <p className="gmail">example@gmail.com</p>
        <p className="phone">(+92)300-123456</p>
      </div>

      <div id="eachmem">
        <p className="name">Jhanzaib Javed</p>
        <p className="gmail">example@gmail.com</p>
        <p className="phone">(+92)300-123456</p>
      </div>
    </section>
  );
});
export default Footer;
