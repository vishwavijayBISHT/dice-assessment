import React from 'react'
import styles from './index.module.scss'
function index({handleSearch}) {
  return (
    <div
    className={styles.container}
    >
        <input

        placeholder="Search here.."
        onChange={(e)=>{
         handleSearch(e.target.value)
        }}

        >
         
        </input>
    </div>
  )
}

export default index