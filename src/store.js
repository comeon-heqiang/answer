import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './store/mutations'
import actions from './store/actions.js'
Vue.use(Vuex)

let state = { 
  itemNum: 1, //第几题
  // 用户信息
  user: {
    id: 1,
    name: '',
    pic: ''
  },
  // 用户头像
  userPic: [{
    id: 1,
    pic: require('./assets/images/user1.png')
  }, {
    id: 2,
    pic: require('./assets/images/user2.png')
  }, {
    id: 3,
    pic: require('./assets/images/user3.png')
  }, {
    id: 4,
    pic: require('./assets/images/user4.png')
  }],
  // 题目
  answerDetail: [{
    id: 1,
    title: '“世界粮食日”是每年的几月几日',
    options: [{
        id: 101,
        text: '3月23日'
      },
      {
        id: 102,
        text: '4月7日'
      },
      {
        id: 103,
        text: '10月14日'
      },
      {
        id: 104,
        text: '10月16日'
      },
    ]
  }],
  timer: '', //答题时间
  // 保存答案
  answerId: []
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})