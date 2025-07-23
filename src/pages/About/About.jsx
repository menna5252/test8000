import React from 'react'
import styles from './About.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className={styles.wrapper}>
    <div className={`container d-flex flex-column align-items-center`}>
    <h1 className='text-center mt-5'>About component</h1>
     <div className='d-flex w-20 align-items-center justify-content-around mt-2  col-md-3'>
        <div className={styles.separator}></div>
        <FontAwesomeIcon icon={faStar} />
        <div  className={styles.separator}></div>
      </div>
    <div className='  d-flex justify-content-between'>
      <div className='col-md-6 p-5'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className='col-md-6 p-5'>
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>

    </div>
    </div>
  )
}
