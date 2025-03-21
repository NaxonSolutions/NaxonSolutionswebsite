import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaRobot,
  FaCloudUploadAlt,
} from "react-icons/fa";
import styles from "./Styling/Services.module.css";
import banner from "./banner.jpg";
import { Link } from "react-router-dom";
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>{icon}</div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: <FaLaptopCode />,
      title: "Web Application Development",
      description:
        "Custom, responsive web applications built with modern frameworks like React, Angular, and Vue.js. From simple websites to complex enterprise solutions, we deliver scalable and secure web experiences.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android. Using technologies like React Native and Flutter, we create engaging mobile experiences that perform flawlessly across devices.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Robust server-side solutions using Node.js, Python, Java, and .NET. We design and implement APIs, databases, and microservices architectures that power your applications with reliability and performance.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Solutions",
      description:
        "Full-featured online stores with secure payment processing, inventory management, and customer relationship tools. We build custom e-commerce platforms or integrate with Shopify, WooCommerce, and more.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Machine Learning Integration",
      description:
        "Intelligent solutions that leverage the latest in artificial intelligence and machine learning. From chatbots and recommendation engines to data analysis and predictive models.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Cloud Services & DevOps",
      description:
        "Cloud infrastructure setup, deployment automation, and continuous integration. We help you leverage AWS, Azure, or Google Cloud to optimize performance and minimize costs.",
    },
  ];

  return (
    <div>
      <img src={banner} className={styles.bannerImg} alt="" />
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <h1 className={styles.mainHeading}>Our Services</h1>
          <p className={styles.mainDescription}>
            We deliver cutting-edge software solutions tailored to your unique
            business needs. Our team of experts combines technical excellence
            with industry knowledge to bring your vision to life.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className={styles.processSection}>
          <h2 className={styles.processHeading}>Our Development Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <h3 className={styles.processTitle}>Discovery</h3>
              <p className={styles.processDescription}>
                We collaborate to understand your goals, requirements, and
                vision.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <h3 className={styles.processTitle}>Planning</h3>
              <p className={styles.processDescription}>
                We create detailed specifications and project roadmaps.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <h3 className={styles.processTitle}>Development</h3>
              <p className={styles.processDescription}>
                We build your solution with agile methodologies and regular
                updates.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <h3 className={styles.processTitle}>Launch & Support</h3>
              <p className={styles.processDescription}>
                We deploy your solution and provide ongoing maintenance.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Ready to Start Your Project?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          <div className={styles.ctaButtonContainer}>
            <Link className={styles.ctaButton} to="/Contact_us">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
