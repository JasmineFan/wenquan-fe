import React, { FC, useState } from 'react'
import { useTitle, useRequest } from 'ahooks'
import styles from './Common.module.scss'
import { Typography, Empty, Spin } from 'antd'
import QuestionCard from '../../components/QuestionCard'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import { useSearchParams } from 'react-router-dom'

const { Title } = Typography
// const rawQuestionList = [
//   {
//     _id: '1',
//     title: '问卷1',
//     answerCount: 3,
//     createdAt: '3月10 日 11:00',
//     isStar: true,
//     isPublished: true,
//   },
//   {
//     _id: '2',
//     title: '问卷2',
//     answerCount: 6,
//     createdAt: '3月10 日 11:00',
//     isStar: true,
//     isPublished: false,
//   },
//   {
//     _id: '3',
//     title: '问卷3',
//     answerCount: 0,
//     createdAt: '3月10 日 11:00',
//     isStar: true,
//     isPublished: false,
//   },
// ]
const Star: FC = () => {
  // const [questionList, setQuestionList] = useState(rawQuestionList)
  useTitle('问卷猫-我的问卷')
  const [searchParam] = useSearchParams()
  console.log('keyword', searchParam.get('keyword'))

  const { loading, data = {} } = useLoadQuestionListData({ isStar: true })
  const { list = {}, total = 0 } = data

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description={'这里没有星标问卷'} />}
        {!loading &&
          list.length > 0 &&
          list.map((question: any) => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}
export default Star
