import React from 'react'
//style
import styles from'./Home.module.css'
//assets
import person1 from '../../assets/person.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  console.log("🚀 styles:", styles);
  return (
  <div className={`${styles.wrapperhomenew}`}>



  <img className='w-25'  src={person1} alt='person1'/>
  <h1>Start Framework ✅</h1>

  <div className='d-flex w-20 align-items-center justify-content-around mt-2 mb-2'>
    <div className={styles.separator}></div>
    <FontAwesomeIcon icon={faStar} />
    <div  className={styles.separator}></div>
  </div>
  <p>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  )
}
