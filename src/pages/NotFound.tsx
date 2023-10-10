import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MANAGE_LIST_PATHNAME } from '../router'

const NotFound: FC = () => {
  const nav = useNavigate()
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="抱歉，你访问的页面不存在"
        extra={
          <Button
            type="primary"
            onClick={() => {
              nav(`${MANAGE_LIST_PATHNAME}`)
            }}
          >
            回到首页
          </Button>
        }
      />
    </div>
  )
}
export default NotFound
