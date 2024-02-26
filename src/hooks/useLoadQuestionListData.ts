import { useRequest } from 'ahooks'
import { getQuestionListService } from '../services/question'
import { useSearchParams } from 'react-router-dom'
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_PAGE_SIZE,
} from '../constant'
type OptionType = {
  isStar: boolean
  isDeleted: boolean
}

const useLoadQuestionListData = (opt: Partial<OptionType> = {}) => {
  const { isStar, isDeleted } = opt //没有默认值的时候就是undefined , 在 url 里面是不拼接的，这样 url 短
  const [searchParams] = useSearchParams()
  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
      const pageSize = parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') || LIST_PAGE_SIZE
      const data = await getQuestionListService({ keyword, isStar, isDeleted, page, pageSize })
      return data
    },
    {
      refreshDeps: [searchParams], //刷新 useRequest 的依赖项
    }
  )
  return { data, loading, error }
}

export default useLoadQuestionListData
