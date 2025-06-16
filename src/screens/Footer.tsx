import { forwardRef } from "react";
import "./../css/Footer.css";
type FooterProps = {};

const Footer = forwardRef<HTMLElement, FooterProps>((_props, ref) => {
  return (
    <section id="footCont" ref={ref}>
      <p>
        <span className="emphasized">Gmail: </span>example@gmail.com
      </p>
      <p>
        <span className="emphasized">Support: </span>+92 300 1234567
      </p>
    </section>
  );
});
export default Footer;
