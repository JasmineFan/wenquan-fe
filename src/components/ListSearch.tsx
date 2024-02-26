import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const { Search } = Input

const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const [searchString, setSearchString] = useState('')
  useEffect(() => {
    const newVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setSearchString(newVal)
  }, [searchParams])
  function handleSearch(value: string) {
    // console.log('value', value)
    // nav(`${pathname}?keyword=${value}`)
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }
  console.log(searchParams)
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value)
  }
  return (
    <>
      <Search
        size="large"
        allowClear
        placeholder="输入关键字"
        value={searchString}
        onSearch={handleSearch}
        style={{ width: '200px' }}
        onChange={handleChange}
      />
    </>
  )
}
export default ListSearch
