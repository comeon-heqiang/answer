import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions.js'
Vue.use(Vuex)

let state = {
  itemNum: 1, //第几题
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
  answerDetail: [
    {
      id: 1,
      title: '山的那边海的那边有一群蓝精灵，活泼又聪明……”请问蓝精灵的主要敌人叫什么？',
      options: [
        {
          id: 1,
          text: '蓝月亮',
          is_standard_answer: false
        },
        {
          id: 2,
          text: '人类',
          is_standard_answer: false
        },
        {
          id: 3,
          text: '格格巫',
          is_standard_answer: true
        },
        {
          id: 4,
          text: '蘑菇',
          is_standard_answer: false
        }
      ]
    },
    {
      id: 2,
      title: '世界上第一张照片是哪国人拍摄的？',
      options: [{
          id: 5,
          text: '法国人',
          is_standard_answer: true
        },
        {
          id: 6,
          text: '英国人',
          is_standard_answer: false
        },
        {
          id: 7,
          text: '中国人',
          is_standard_answer: false
        },
        {
          id: 8,
          text: '美国人',
          is_standard_answer: false
        }
      ]
    },
    {
      id: 3,
      title: '世界上人口最少的国家是？',
      options: [{
          id: 9,
          text: '中国',
          is_standard_answer: false
        },
        {
          id: 10,
          text: '美国',
          is_standard_answer: false
        },
        {
          id: 11,
          text: '梵蒂冈',
          is_standard_answer: true
        },
        {
          id: 12,
          text: '韩国',
          is_standard_answer: false
        }
      ]
    },
    {
      id: 4,
      title: '世界上最小的猴子是？',
      options: [{
          id: 13,
          text: '指猴',
          is_standard_answer: true
        },
        {
          id: 14,
          text: '六耳猕猴',
          is_standard_answer: false
        },
        {
          id: 15,
          text: '通臂猿猴',
          is_standard_answer: false
        },
        {
          id: 16,
          text: '金丝猴',
          is_standard_answer: false
        }
      ]
    },{
      id: 4,
      title: '世界上最早的计算机诞生于哪里？',
      options: [{
          id: 17,
          text: '中国',
          is_standard_answer: false
        },
        {
          id: 18,
          text: '日本',
          is_standard_answer: false
        },
        {
          id: 19,
          text: '美国',
          is_standard_answer: true
        },
        {
          id: 20,
          text: '英国',
          is_standard_answer: false
        }
      ]
    },

  ],
  correctAnswer: ['格格巫', '法国人','梵蒂冈','指猴','美国'], //正确答案
  timer: '', //答题时间
  // 保存答案
  answerId: []
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})