import React, { FC } from 'react'
import styles from './Common.module.scss'

const Trash: FC = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>trash</div>
      <div className={styles.footer}>loadingmore</div>
    </>
  )
}

export default Trash
