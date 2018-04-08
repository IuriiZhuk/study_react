import React from "react";

import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

import Logo from "../Logo";


import './index.css';

function Footer () {
  return (
    <div className="main-footer">
      <div className="footer__inner">
        <Logo styleName="main-footer"/>
        <div className=" main-footer__social social">
          
        <a href ="www.facebook.com">
        <FontAwesome
        className="social__link"
        name="facebook-official"                
        />
        </a>

        <a href ="www.vk.com" >
        <FontAwesome
        className="social__link"
        name="vk"  
        
        
        />
        </a>

        <a href ="www.twitter.com">
        <FontAwesome
        className="social__link"
        name="twitter-square"    
                
        />
        </a>
          
         
        </div>
      </div>
    </div>

  );
}


export default Footer;