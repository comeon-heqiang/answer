export default {
  // 设置用户基本信息
  userInfo({
    commit,
    state
  }, userInfo) {
    commit('USERINFO', userInfo)
  },
  // 记录答案
  recordAnswer({commit,state},id){
    commit('RECORDANSWER',id)
  },
  // 下一题
  nextQuestion({
    commit,
    state
  }) {
    commit("NEXTQUESTION")
  },
  // 初始化信息
  initData({
    commit
  }) {
    commit('INITDATA')
  }
}