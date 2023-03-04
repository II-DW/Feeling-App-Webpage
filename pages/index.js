import styles from '../styles/Home.module.css';
import Image from "next/image";
import feel3 from '../public/feel1.svg';
import feel2 from '../public/feel2.svg';
import feel1 from '../public/feel3.svg';
import feel5 from '../public/feel5.svg';
import {useScrollFadeIn} from '../components/animation.js';
import { Avatar } from "@nextui-org/react";
import Link from "next/link"



export default function Home() {


  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0, 40),
    1: useScrollFadeIn('up', 1, 0, 60),

    2: useScrollFadeIn('up', 1, 0, 40),
    3: useScrollFadeIn('up', 1, 0, 60),

    4: useScrollFadeIn('up', 1, 0, 40),
    5: useScrollFadeIn('up', 1, 0, 60),

    6: useScrollFadeIn('up', 1, 0, 40),
    7: useScrollFadeIn('up', 1, 0, 60),

    8: useScrollFadeIn('up', 1, 0, 40),
    9: useScrollFadeIn('up', 1, 0, 60),
  };
  return(
    <div>
      <div className={styles.firstpage} >
        <Image alt = "face" className={styles.img1} src={feel1} {...animatedItem[0]} />
        <span className={styles.pagetitle} {...animatedItem[1]}>당신의 감정을 보여드릴게요</span>
      </div>

      <div className={styles.secondpage} >
        <Image alt = "face" className={styles.img1} src={feel2} {...animatedItem[2]} />
        <span className={styles.pagetitle} {...animatedItem[3]}>당신의 감정을 기록하세요</span>
      </div>

      <div className={styles.thirdpage} >
        <Image alt = "face" className={styles.img1} src={feel3} {...animatedItem[4]} />
        <span className={styles.pagetitle} {...animatedItem[5]}>당신의 감정 변화를 확인하세요</span>
      </div>


      <div className={styles.fifthpage}>
        <Image alt = "face" className={styles.img1} src={feel5} {...animatedItem[8]} />
        <span className={styles.pagetitle} {...animatedItem[9]}>마지막으로, 당신의 감정을 분석해드릴게요</span>
      </div>
      
      <div className={styles.enddiv}>
        <span className={styles.endtxt2} >Learn More About Us</span>
        <div className={styles.avatardiv}>
          <Link href = "https://github.com/II-DW" className={styles.avatarpadding}><Avatar text="LDW" color="primary" textColor="white" className = {styles.avatarimg} /></Link>
          <Link href = "https://github.com/2ssunny" className={styles.avatarpadding}><Avatar text="LJH" color="success" textColor="white" className = {styles.avatarimg} /></Link>
        </div>
        <span className={styles.endtxt3}>Copyright © From Lee Dowon & Lee Juho</span>
      </div>
    </div>
  )
}