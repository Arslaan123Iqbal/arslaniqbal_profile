import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text_logo}>
        <h1>Arslan Iqbal LEVEL 100</h1>
        <div className={styles.line}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </div>
        <h2>Software Engineer</h2>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} href={'/'}>Home</Link>
        <Link className={styles.link} href={'/'}>Skills</Link>
        <Link className={styles.link} href={'/'}>Projects</Link>
        <Link className={styles.link} href={'/'}>Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
