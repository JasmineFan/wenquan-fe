import React, { FC, useState } from 'react'
import styles from './Common.module.scss'
import { Typography, Empty, Table, Tag, Button, Space, Modal, Spin } from 'antd'
import { ExclamationOutlined } from '@ant-design/icons'
import ListSearch from '../../components/ListSearch'
import { useSearchParams } from 'react-router-dom'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import { useTitle } from 'ahooks'

const { Title } = Typography
const { confirm } = Modal

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
//     isStar: false,
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

const Trash: FC = () => {
  useTitle('回收站')
  // const [questionList, setQuestionList] = useState(rawQuestionList)
  const [searchParam] = useSearchParams()
  console.log('keyword', searchParam.get('keyword'))
  const { loading, data = {} } = useLoadQuestionListData({ isDeleted: true })
  const { list = {}, total = 0 } = data

  //记录哪些被选中，可以用来删除啥的
  const [selectedIds, setSelectedIds] = useState<string[]>([])
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
  function del() {
    confirm({
      title: '确定彻底删除？',
      icon: <ExclamationOutlined />,
      content: '删除以后不可以找回',
      onOk: () => {
        alert(`删除${JSON.stringify(selectedIds)}`)
      },
    })
  }
  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={list}
        columns={tableColumns}
        pagination={false}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => {
            setSelectedIds(selectedRowKeys as string[])
          },
        }}
      />
    </>
  )
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
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
        {!loading && list.length === 0 && <Empty description="没有删除的问卷" />}
        {list.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>loadingmore</div>
    </>
  )
}

export default Trash
