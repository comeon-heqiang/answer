import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions.js'
import {answerType,category} from '../data/answerDetail'
Vue.use(Vuex)

let state = {
  itemNum: 1, //第几题
  // 栏目
  category:category,
  categoryType:1, //选择的答题类型
  // 用户信息
  user: {
    id: 1,
    name: '',
    pic: require('../assets/images/user1.png')
  },
  // 用户头像
  userPic: [{
    id: 1,
    pic: require('../assets/images/user1.png')
  }, {
    id: 2,
    pic: require('../assets/images/user2.png')
  }, {
    id: 3,
    pic: require('../assets/images/user3.png')
  }, {
    id: 4,
    pic: require('../assets/images/user4.png')
  }],
  // 题目
  answerType:answerType,  
  timer: '', //答题时间
  // 保存答案
  answerId: []
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})