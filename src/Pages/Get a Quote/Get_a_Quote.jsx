import React from "react";
import styles from "./Styling/Get_a_Quote.module.css"; // Import modular CSS

const Get_a_Quote = () => {
  return (
    <div className={styles.quoteContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Get a Free Quote</h1>
        <p className={styles.heroSubtitle}>
          Let's discuss your project and provide you with a tailored solution
          that fits your needs and budget.
        </p>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Tell Us About Your Project</h2>
        <form className={styles.quoteForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.formInput}
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              placeholder="johndoe@example.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className={styles.formInput}
              placeholder="+1 234 567 890"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="projectType" className={styles.formLabel}>
              Project Type
            </label>
            <select id="projectType" className={styles.formSelect} required>
              <option value="">Select a project type</option>
              <option value="web">Web Application</option>
              <option value="mobile">Mobile App</option>
              <option value="ecommerce">E-commerce Solution</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="cloud">Cloud Services</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Project Details
            </label>
            <textarea
              id="message"
              className={styles.formTextarea}
              placeholder="Describe your project requirements..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Get a Quote
          </button>
        </form>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Not Sure Where to Start?</h2>
        <p className={styles.ctaText}>
          Schedule a free consultation with our experts to discuss your ideas
          and get personalized recommendations.
        </p>
        <button className={styles.ctaButton}>Schedule Consultation</button>
      </section>
    </div>
  );
};

export default Get_a_Quote;
