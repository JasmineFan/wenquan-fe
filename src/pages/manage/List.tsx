import React, { FC, useState } from 'react'
import styles from './Common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Typography } from 'antd'

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
  {
    _id: '4',
    title: '问卷4',
    answerCount: 0,
    createdAt: '3月10 日 11:00',
    isStar: false,
    isPublished: true,
  },
]
const List: FC = () => {
  useTitle('问卷猫-我的问卷')
  const [searchParam] = useSearchParams()
  console.log('keyword', searchParam.get('keyword'))

  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.length > 0 &&
          questionList.map(question => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      <div className={styles.footer}>loadingmore</div>
    </>
  )
}
export default List
