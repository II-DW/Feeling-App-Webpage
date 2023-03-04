import Link from "next/link"
import { useState } from "react";
import styles from "../styles/NavBar.module.css";

export default function Nav() {
    const [TOF2, MouseOver2] = useState(true);


    const overmouse2 = () => {

        MouseOver2((current) => !current)

    }
    return (
        <div className={styles.navbar}>
            <Link href="/" className={styles.navstyle2} onMouseEnter={overmouse2} onMouseLeave={overmouse2}>
                {TOF2  ? "S" : "See"} 
            </Link>            
            <Link href="/" className={styles.navstyle2} onMouseEnter={overmouse2} onMouseLeave={overmouse2}>
                {TOF2  ? "Y" : "Your"} 
            </Link>
            <Link href="/" className={styles.navstyle2} onMouseEnter={overmouse2} onMouseLeave={overmouse2}>
                {TOF2  ? "F" : "Feeling"} 
            </Link>

            <span className={styles.blank} />
            <Link href="/about" className={styles.navstyle}>
                About
            </Link>

            <span className={styles.blank} />
            <Link href="/analysis" className={styles.navstyle}>
                Analysis
            </Link>

            <span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} /><span className={styles.blank} />
            <Link href="/userpage" className={styles.navstyle}>
                Login
            </Link>
            <span className={styles.navstyle}>/</span>
            <Link href="/userpage" className={styles.navstyle}>
                sign
            </Link>
            
        </div>
    )
}