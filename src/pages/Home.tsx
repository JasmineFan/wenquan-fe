import React, { FC, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_LIST_PATHNAME } from '../router'
import styles from './Home.module.scss'
// import '../_mock/index'
import axios from 'axios'

const { Title, Paragraph } = Typography
const Home: FC = () => {
  //useNavigate 就是react router 的第三方hook
  const nav = useNavigate()

  //React18 useEffect  在开发环境下，会执行两次
  useEffect(() => {
    // fetch('/api/test')
    //   .then(res => res.json())
    //   .then(data => console.log('fetch data', data))
    // mockjs 只能劫持 XMLHttpRequest, 不能劫持 fetch
    //axios 内部使用了XMLHttpRequest api, 没用fetch
    //解决跨域问题这里用本地环境 webpack devserver 代理
    axios.get('/api/testNode').then(res => console.log('aixos res', res))
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷 100 份， 发布问卷 80 份，收到答卷 1000 份</Paragraph>
        <div>
          <Button
            type="primary"
            onClick={() => {
              nav(MANAGE_LIST_PATHNAME)
            }}
          >
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Home
