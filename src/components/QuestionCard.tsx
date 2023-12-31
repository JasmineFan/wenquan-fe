import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'
import { Button, Space, Tag, Divider, Popconfirm, Modal, message } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import {
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'

const { confirm } = Modal

type PropsType = {
  _id: string
  title: string
  answerCount: number
  createdAt: string
  isStar: boolean
  isPublished: boolean
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, isPublished, answerCount, createdAt, isStar } = props
  const nav = useNavigate()
  function duplicate() {
    message.success('复制')
  }
  function del() {
    confirm({
      title: '确定删除该问卷',
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        message.success('删除成功')
      },
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color="processing"> 已发布 </Tag> : <Tag>未发布</Tag>}
            <span>答卷：{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              type="text"
              icon={<EditOutlined />}
              size="small"
              onClick={() => {
                nav(`/question/edit/${_id}`)
              }}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              icon={<LineChartOutlined />}
              size="small"
              onClick={() => {
                nav(`/question/stat/${_id}`)
              }}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="text" icon={<StarOutlined />} size="small">
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              title="确定复制该问卷？"
              onConfirm={duplicate}
              okText="确定"
              cancelText="取消"
            >
              <Button type="text" icon={<CopyOutlined />} size="small">
                复制
              </Button>
            </Popconfirm>

            <Button type="text" icon={<DeleteOutlined />} size="small" onClick={del}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default QuestionCard
