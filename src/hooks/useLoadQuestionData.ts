// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '../services/question'
import { useRequest } from 'ahooks'
function useLoadQuestionData() {
  //在 axios 里面处理 loading 的状态的
  //现在我们要用ahook 里面的useRequest 来一起处理loading , error 之类的状态，要看 useRequest 的说明书
  const { id = '' } = useParams()
  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})
  // useEffect(() => {
  //   async function fn() {
  //     const data = await getQuestionService(id)
  //     // console.log('edit data', data)
  //     setQuestionData(data)
  //     setLoading(false)
  //   }
  //   fn()
  // }, [])
  // return { loading, questionData }

  async function load() {
    const data = await getQuestionService(id)
    return data
  }
  const { loading, data, error } = useRequest(load)
  return { loading, data, error }
}
export default useLoadQuestionData
