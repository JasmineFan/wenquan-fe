import Mock from 'mockjs'

Mock.mock('/api/test', 'get', () => {
  return {
    error: 0,
    data: {
      name: `fan fan ${Date.now()}`,
    },
  }
})
