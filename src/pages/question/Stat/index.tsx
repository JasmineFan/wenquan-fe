import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
const Stat: FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div>
      <p> edit page</p>

      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  )
}
export default Stat
