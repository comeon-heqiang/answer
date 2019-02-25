export default {
  // 设置用户基本信息
  userInfo({commit,state},userInfo){
    commit('USERINFO',userInfo)
  },
  // 初始化信息
  initData({commit}){
    commit('INITDATA')
  }
}