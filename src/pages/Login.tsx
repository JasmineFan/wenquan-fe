import React, { FC, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Login.module.scss'
import { Typography, Space, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { REGISTER_PATHNAME } from '../router'

const { Title } = Typography

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}
function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}
function getUserInfoFromStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  }
}
const Login: FC = () => {
  const [form] = Form.useForm() //antd Form 组件提供的第三方hook
  // const nav = useNavigate()
  const onFinish = (value: any) => {
    const { username, password, remember } = value || {}
    console.log(value)
    if (remember) {
      rememberUser(username, password)
    } else {
      deleteUserFromStorage()
    }
  }
  useEffect(() => {
    const { username, password } = getUserInfoFromStorage()
    form.setFieldsValue({ username, password })
  }, [])
  return (
    <div className={styles.container}>
      <Space>
        <Title level={2}>
          <UserOutlined />
        </Title>
        <Title level={2}>登录</Title>
      </Space>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { type: 'string', min: 5, max: 20 },
              { pattern: /^\w+$/, message: '只能是字母数字下划线' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default Login
