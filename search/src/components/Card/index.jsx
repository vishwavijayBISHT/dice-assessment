import React from 'react'
import styles from './index.module.scss'
export default function index({cardData}) {
    console.log(cardData,"cardData")
  return (
    <div className={styles.container}>
        <div className={styles.userData}>
        <img 
        className={styles.avatar}
        src={cardData?.owner.avatar_url}>
       </img>

        <div><b>{cardData?.name}</b></div>
        </div>
        <div className={styles.content}>
            <span>Stars : <b>{cardData?.stargazers_count}</b></span>
            <span>Language : <b>{cardData?.language}</b></span>
            <span>Description : <b>{cardData?.description}</b></span>
        </div>
    </div>
  )
}
