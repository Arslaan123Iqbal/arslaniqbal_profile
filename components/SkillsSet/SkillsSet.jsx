import React, { useEffect, useState } from "react";
import styles from "./skills.module.scss";
import { skills } from "./data";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const SkillsSet = () => {
  const [data, setData] = useState(0);
  useEffect(() => {

  }, []);


  return (
    <div className={styles.main}>
     <div className={styles.skillsHeading}>
     <h1>Skills</h1>
     </div>
      <div
        className={styles.show}
      >
        <Image src={`/icons/${skills[data].src}`} width={200} height={150} />
        <h2>{skills[data].name}</h2>

        <CircularProgressbar
          className={styles.circularProgress}
          value={skills[data].per}
          text={`${skills[data].per}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "25px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${skills[data].per / 100})`,
            textColor: "#008000",
            trailColor: "#d6d6d6",
            backgroundColor: "#fff",
          })}
        />
      </div>

      <div className={styles.skills}>
        {skills.map((skill, i) => (
          <div key={`Skills-${i}`} className={styles.skillData}>
            <div className={styles.skillImageDiv} onClick={()=> setData(i)}>
              <Image
                className={styles.skillImage}
                src={`/icons/${skill.src}`}
                width={100}
                height={100}
              />
            </div>
            <h1>{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSet;
