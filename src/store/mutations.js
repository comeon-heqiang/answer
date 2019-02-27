export default {
  // 设置用户基本信息
  USERINFO(state, userInfo) {
    state.user.name = userInfo.name
    state.user.pic = userInfo.pic
  },
  // 记录答案
  RECORDANSWER(state, isTrue) {
    state.answerId.push(isTrue)
  },
  // 下一题
  NEXTQUESTION(state) {
    state.itemNum++
  },
  //初始化信息
  INITDATA(state) {
    state.itemNum = 1
    state.user = {
      id: 1,
      name: '',
      pic: ''
    }
    state.timer = '';
    state.answerId = []
    
  }
}