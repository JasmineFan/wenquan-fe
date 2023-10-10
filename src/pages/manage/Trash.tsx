import React, { FC, useState } from 'react'
import styles from './Common.module.scss'
import { Typography, Empty, Table, Tag } from 'antd'

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
    isStar: false,
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

const Trash: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)
  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
      // key:'title'  //循环列的 key, 默认会取dataIndex 的值
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ]
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="没有删除的问卷" />}
        {questionList.length > 0 && (
          <Table dataSource={questionList} columns={tableColumns} pagination={false} />
        )}
      </div>
      <div className={styles.footer}>loadingmore</div>
    </>
  )
}

export default Trash
