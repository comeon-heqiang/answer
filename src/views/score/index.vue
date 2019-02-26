<template>
  <div class="result">
    <score-header title="个人中心"></score-header>
    <img
      :src="user.pic"
      alt=""
      class='userImg'
    >

    <div class="detail">
      <dl>
        <dd>
          <strong>答对</strong>
          {{answerNum}}
        </dd>
        <dd>
          <strong>答错</strong>
          {{correctAnswer.length-answerNum}}
        </dd>
      </dl>
      <ul class="list">
        <li>
          <span>
            分数：
          </span>
          {{score}}
        </li>
        <li>
          <span>
            称号：
          </span>
          {{epithetTip}}
        </li>
      </ul>
    </div>
    <div class="btn-group">
      <router-link
        tag="button"
        to="/"
        class="btn-submit"
      >重新开始</router-link>
    </div>
  </div>
</template>

<script>
import scoreHeader from '../../components/Header'
import { mapState } from 'vuex'
export default {
  name:"score",
  data () {
    return {
      correctAnswer: [3, 5, 11, 13, 19], //正确答案
      answerNum: 0, //答对的题数
      epithetArr: ['呆头呆脑', '愚不可及', '聪明过人', '才高八斗', '聪明绝世'], //称号
      tipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！"
      ]
    }
  },
   created () {
    this.computedScore()
  },
  computed: {
    ...mapState(['answerId', 'user']),
    // 分数
    score () {
      return this.answerNum * 20;
    },
    // 分数提示
    scoreTip () {
      let tipsIndex = this.answerNum - 1 > 0 ? this.answerNum - 1 : 0
      return this.tipsArr[tipsIndex];
    },
    // 称号
    epithetTip () {
      let tipsIndex = this.answerNum - 1 > 0 ? this.answerNum - 1 : 0
      return this.epithetArr[tipsIndex];
    }
  },
  components:{
    scoreHeader
  },
  methods: {
    // 分数计算
    computedScore () {
      this.answerId.forEach((item, index) => {
        if (item === this.correctAnswer[index]) {
          this.answerNum++
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
// 结果
.result {
  overflow: hidden;
  .userImg {
    display: block;
    width: 1.6rem;
    margin: 0.6rem auto;
    border-radius: 50%;
  }

  .detail {
    width: 85%;
    margin: 0 auto;
    padding: 1.2rem 0.2rem 0.4rem;
    background: url("../../assets/images/result-detail.png") no-repeat 0 0 /100%
      100%;    
    box-sizing: border-box;
    dl {
      display: flex;
      dd {
        flex: 1;
        display: flex;
        flex-direction: column;
        line-height: 1.6;
        text-align: center;
        color: #6689d7;
        font-size: 0.4rem;
        font-weight: bold;
        &:last-child {
          color: #fb5e5e;
        }
      }
    }
    ul.list {
      margin: 0.3rem 1.1rem;
      li {
        font-size: 0.3rem;
        line-height: 1.8;
        span {
          display: inline-block;
          min-width: 1.2rem;
        }
      }
    }
  }
}
</style>