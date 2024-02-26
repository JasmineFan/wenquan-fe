import React, { FC, useEffect, useState } from 'react'
import styles from './Common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { useSearchParams } from 'react-router-dom'
import { useTitle, useRequest } from 'ahooks'
import { Typography, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import { getQuestionListService } from '../../services/question'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

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
//   {
//     _id: '4',
//     title: '问卷4',
//     answerCount: 0,
//     createdAt: '3月10 日 11:00',
//     isStar: false,
//     isPublished: true,
//   },
// ]
const List: FC = () => {
  useTitle('问卷猫-我的问卷')
  const [searchParam] = useSearchParams()
  console.log('keyword', searchParam.get('keyword'))
  // const [list, setList] = useState([])
  // const [total, setTotal] = useState(0)

  const { loading, data = {} } = useLoadQuestionListData()
  const { list = {}, total = 0 } = data

  // useEffect(() => {
  //   async function load() {
  //     const data = await getQuestionListService()
  //     const { list = {}, total = 0 } = data
  //     setList(list)
  //     setTotal(total)
  //   }
  //   load()
  // }, [])

  // const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
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
        {!loading &&
          list.length > 0 &&
          list.map((question: any) => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      <div className={styles.footer}>loadingmore</div>
    </>
  )
}
export default List
