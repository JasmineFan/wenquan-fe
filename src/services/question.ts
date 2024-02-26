import axios, { ResDataType } from './ajax'

type SearchOption = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
  page: number
  pageSize: number
}

export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await axios.get(url)) as ResDataType
  return data
}

export async function createQuestionService(): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await axios.post(url)) as ResDataType
  return data
}

export async function getQuestionListService(
  opt: Partial<SearchOption> = {}
): Promise<ResDataType> {
  const url = `/api/question`
  //opt:{a:10,b:20} 结果就是/api/question?a=10&b=20
  const data = (await axios.get(url, { params: opt })) as ResDataType
  return data
}
