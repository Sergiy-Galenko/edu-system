import React from 'react';
import styles from  '../styles/components/Footer.module.css'
import { FaFacebook, FaLink, FaGlobe } from 'react-icons/fa6'; 

const Footer = () => {
  return (
    <div className={styles.projectsFooterContainer}>
      <div className={styles.otherProjects}>
        <div className={styles.row}>
          <div className={styles.grid25}>
            <a 
              href="https://ircenter.gov.ua/" 
              target="_blank" 
              rel="noopener noreferrer nofollow"
            >
              <FaGlobe className={styles.projectLogo} /> 
            </a>
          </div>
          <div className={styles.grid25}>
            <a
              href="https://www.facebook.com/groups/2228332080718848/?ref=share"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaFacebook className={styles.projectLogo} /> 
            </a>
          </div>
          <div className={styles.grid25}>
            <a
              href="https://mon.gov.ua/ua"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaLink className={styles.projectLogo} /> 
            </a>
          </div>
          <div className={styles.grid25}>
            <a
              href="http://voromny.org.ua/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaLink className={styles.projectLogo} /> 
            </a>
          </div>
          <div className={styles.grid25}>
            <a
              href="https://www.facebook.com/profile.php?id=100063575230550"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaFacebook className={styles.projectLogo} />
            </a>
          </div>
          <div className={styles.grid25}>
            <a
              href="https://imzo.gov.ua/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FaGlobe className={styles.projectLogo} />
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.row}>
            <div className={styles.grid60}>
              Комунальна установа "Інклюзивно-ресурсний центр" - 2018-2024 &copy; Весь контент доступний за
              ліцензією{" "}
              <a
                href="https://creativecommons.org/licenses/by/4.0/deed.uk"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Creative Commons Attribution 4.0 International License
              </a>
              , якщо не зазначено інше.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
