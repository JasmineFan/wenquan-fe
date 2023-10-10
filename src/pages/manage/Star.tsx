import React, { FC, useState } from 'react'
import styles from './Common.module.scss'
import { Typography, Empty } from 'antd'
import QuestionCard from '../../components/QuestionCard'
const { Title } = Typography
const rawQuestionList = [
  {
    _id: '1',
    title: '问卷1',
    answerCount: 3,
    createdAt: '3月10 日 11:00',
    isStar: true,
    isPublished: true,
  },
  {
    _id: '2',
    title: '问卷2',
    answerCount: 6,
    createdAt: '3月10 日 11:00',
    isStar: true,
    isPublished: false,
  },
  {
    _id: '3',
    title: '问卷3',
    answerCount: 0,
    createdAt: '3月10 日 11:00',
    isStar: true,
    isPublished: false,
  },
]
const Star: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description={'这里没有星标问卷'} />}
        {questionList.length > 0 &&
          questionList.map(question => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}
export default Star
