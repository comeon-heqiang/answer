export default {
  // 设置用户基本信息
  USERINFO(state, userInfo) {
    state.user.name = userInfo.name
    state.user.pic = userInfo.pic
  },
  //初始化信息
  INITDATA(state) {
    state.itemNum = 1
    state.title = "首页"
    state.user = {
      id: 1,
      name: '',
      pic: ''
    }
    state.timer = '';
    state.answerId = []
  }
}