import React, { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import styling from "../Styling/Hero.module.css";
import { LuMessageCircleCode } from "react-icons/lu";
import banner from "./banner.jpg";
import Chat from "./subComponents/AfterHero_SUBS/Chat";
const Hero = () => {
  let [flag, setFlag] = useState(true);
  let handleScrolling = () => {};
  let handleChatIcon = () => {};
  return (
    <div>
      <img src={banner} className={styling.banner} alt="" />
      <div className={styling.heroMain}>
        <p className={styling.heroHeading}>
          Revolutionize your business with NaxonSolutions Inovative Solutions
        </p>
        <p className={styling.heroTagline}>
          Unlock the power of cutting-edge software for unprecedent Success
        </p>
        <button className={styling.CTAButton}>Getting started Now</button>
        <FaArrowDownLong
          onClick={handleScrolling}
          className={styling.iconComponent}
        />
        <LuMessageCircleCode
          onClick={() => (flag ? setFlag(false) : setFlag(true))}
          className={styling.ChatIcon}
        />
        {flag ? <Chat></Chat> : null}
      </div>
      <div className={styling.heroBackground}></div>
    </div>
  );
};

export default Hero;
