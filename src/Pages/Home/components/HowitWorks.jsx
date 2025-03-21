import React from "react";
import styles from "./HowItWorks.module.css"; // Import the modular CSS
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const HowItWorks = () => {
  return (
    <div className={styles.parentHow}>
      <div className={styles.howImages}>
        <img className={styles.imageset1} src={img1} alt="" />
        <img className={styles.imageset2} src={img2} alt="" />
        <img className={styles.imageset2} src={img3} alt="" />
      </div>
      <div className={styles.textSection}>
        <p>Tell Us Your Vision</p>
        <p>Share your ideas, and we'll bring them to life.</p>

        <p>Unleash The Creativity</p>
        <p>Our experts craft unique and innovative designs just for you.</p>

        <p>Your Perfect Pic</p>
        <p>Get high-quality visuals tailored to your needs.</p>

        <p>Place Your First Order Now</p>

        <div className={styles.contactSection}>
          <div>
            <p>Contact us as your extended Team</p>
            <p>We will be happy to assist you at every step.</p>
          </div>
          <button>Become Our Partner</button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
