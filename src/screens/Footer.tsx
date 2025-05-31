import { forwardRef } from "react";
type FooterProps = {};

const Footer = forwardRef<HTMLElement, FooterProps>((_props, ref) => {
  return (
    <section ref={ref}>
      <p>This is footer</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
        quaerat hic. Libero omnis aspernatur nemo quam commodi, facere, pariatur
        at et enim autem sint perferendis doloribus provident tempore ipsam
        deleniti?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos autem ab
        corrupti omnis totam itaque dignissimos rem quidem, ratione maiores,
        accusantium modi, molestias fugiat nostrum nisi amet aliquam? Illum,
        unde! Voluptates odio ullam dolore unde, porro a. Consequatur doloremque
        fugit amet, natus sequi nam rem repudiandae non! Ullam praesentium
        recusandae ratione perferendis reiciendis totam mollitia, soluta harum
        porro adipisci quis. Quam dolor distinctio temporibus sit maiores ipsa
        itaque maxime aspernatur nisi! Ratione mollitia quia provident
        reprehenderit est nam magnam culpa inventore tempora saepe, suscipit,
        eius doloremque ipsam! Quam, minima delectus.
      </p>
    </section>
  );
});
export default Footer;
