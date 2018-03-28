import React from "react";
import Logo from "../Logo";
import SocialLink from "../SocialLink";

function Footer () {
  return (

    <div className="footer__inner">
      <Logo />
      <div className="social">
        <SocialLink
          title ="facebook"
        />
        <SocialLink
          title ="twitter"
        />
        <SocialLink
          title ="vkontakte"
        />
      </div>
    </div>

  );
}


export default Footer;