import React from "react";
import Logo from "../Logo";
import SocialLink from "../SocialLink";

import './index.css';

function Footer () {
  return (
    <div className="main-footer">
      <div className="footer__inner">
        <Logo styleName="main-footer"/>
        <div className=" main-footer__social social">
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
    </div>

  );
}


export default Footer;