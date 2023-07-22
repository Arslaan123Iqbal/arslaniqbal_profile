import Banner from '../../components/Banner/Banner';
import styles from './BannerSection.module.scss'

import { useRef, useEffect } from 'react';

export default function BannerSection() {

  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2; 
    const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.container}>
      <div ref={plane} className={styles.body}>
        <Banner primary={"Arslan"} secondary={"Iqbal"}/>
        <Banner primary={"Software"} secondary={"Engineer"}/>
        <Banner primary={"Creative"} secondary={"Ambition"}/>
        <Banner primary={"Team"} secondary={"Leader"}/>
      </div>
    </div>
  )
}