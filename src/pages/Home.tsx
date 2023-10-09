import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from 'antd'
const Home: FC = () => {
  //useNavigate 就是react router 的第三方hook
  const nav = useNavigate()
  function clickHandlerLogin() {
    nav('/login')
  }
  return (
    <div>
      <Button onClick={clickHandlerLogin}>登录</Button> &nbsp;
      <Link to="/register">注册</Link>
    </div>
  )
}
export default Home
