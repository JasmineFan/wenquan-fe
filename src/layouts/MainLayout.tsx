import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'

const { Header, Footer, Content } = Layout

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        {' '}
        MainLayout header
        <div className={styles.left}>logo</div>
        <div className={styles.right}>登录</div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}> 问卷猫 &copy; 2023-present. Created by 饭饭 </Footer>
    </Layout>
  )
}
export default MainLayout
