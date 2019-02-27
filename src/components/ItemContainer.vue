<template>
  <div>
    <answer-header :tag="tag"></answer-header>

    <!-- 答题 -->
    <div class="answer">
      <div class="question">
        {{itemNum}}.{{activeItem.title}}
      </div>
      <ul>
        <li
          v-for="(item,index) in activeItem.options"
          :key="index"
          :class="[{'success':showStandard && item.is_standard_answer}]"
          :ref="index"
          @click="itemClick(item,index)"
        >
          {{getType(index)}}:{{item.text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import answerHeader from './Header.vue'
export default {
  name: 'ItemContainer',
  props: ['tag'],
  data () {
    return {
      showStandard: false,     //显示正确答案
      timer: '',
      answerDetail: '', //题目详情
      type: '' //答题类型
    }
  },
  created () {
    // 获取答题类型
    if (localStorage.getItem('answerType')) {
      this.type = localStorage.getItem('answerType')
    }
    this.answerDetail = this.answerType.filter(item => {
      return item.pid == this.type
    });
    this.answerDetail = this.answerDetail[0].answerDetail

  },
  computed: {
    ...mapState(['userPic', 'answerType', 'itemNum']),
    activeItem () {
      return this.answerDetail[this.itemNum - 1];
    }
  },
  components: {
    answerHeader
  },
  methods: {
    ...mapActions(['initData', 'userInfo', 'nextQuestion', 'recordAnswer']),
    // 选择头像
    choosePic (item, index) {
      this.picActive = index
      this.user.pic = item.pic
    },
    // 索引值转换为ABCD
    getType (index) {
      switch (index) {
        case 0:
          return 'A';
        case 1:
          return 'B';
        case 2:
          return 'C';
        case 3:
          return 'D';
      }
    },
    // 答案点击
    itemClick (item, index) {
      // 选择答案后禁止再次点击
      if (this.showStandard) {
        return
      }

      this.showStandard = true
      // 判断选择是否正确
      if (item.is_standard_answer) {
        this.$refs[index][0].classList.add('success')
      }
      else {
        this.$refs[index][0].classList.add('error')
      }
      // 记录答案
      this.recordAnswer(item.is_standard_answer);

      // 到达最后一题 跳转分数页面

      // 跳转下一题
      this.timer = setTimeout(() => {
        this.showStandard = false
        this.$refs[index][0].classList.remove('error')
        if (this.itemNum >= this.answerDetail.length) {
          this.$router.push({ path: '/score' })
        }
        else {
          this.nextQuestion();
        }
      }, 800);
    }
  }
}
</script>

<style scoped lang="scss">
// 题目
.answer {
  margin: 0.8rem 0.4rem;
  .question {
    padding: 0.7rem 0.5rem 1.4rem;
    background: url("../assets/images/bg-question.png") 0 0/100% 100%;
    color: #fff;
    font-size: 0.32rem;
    line-height: 1.6;
    min-height: 1.7rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    li {
      background: url("../assets/images/bg-answer-item.png") 0 0 /100% 100%;
      color: #d6c258;
      width: 4.2rem;
      line-height: 1rem;
      margin-top: 0.2rem;
      font-size: 0.32rem;
      padding-left: .6rem;
      box-sizing: border-box;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: 0.3rem;
        top: 0.2rem;
        width: 0.5rem;
        height: 0.5rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
      }
      &.success::after {
        background-image: url("../assets/images/icon-success.png");
      }
      &.error::after {
        background-image: url("../assets/images/icon-error.png");
      }
    }
  }
}
</style>