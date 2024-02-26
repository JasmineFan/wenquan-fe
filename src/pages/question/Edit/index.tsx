import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '../../../services/question'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: FC = () => {
  // const { id = '' } = useParams()
  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})
  // //getQuestionService 是异步函数，没有办法在useEffect 当中直接使用
  // useEffect(() => {
  //   async function fn() {
  //     const data = await getQuestionService(id)
  //     // console.log('edit data', data)
  //     setQuestionData(data)
  //     setLoading(false)
  //   }
  //   fn()
  // }, [])
  const { loading, data } = useLoadQuestionData()
  return (
    <div>
      <p> edit page</p>

      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}
export default Edit
