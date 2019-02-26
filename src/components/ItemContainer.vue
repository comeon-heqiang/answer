<template>
  <div>
    <answer-header :tag="tag"></answer-header>
    <!-- 首页 -->
    <div
      v-if="tag==='home'"
      class="user-info"
    >
      <div class="item">
        <h2>请选择头像</h2>
        <ul>
          <li
            v-for="(item,index) of userPic"
            :key="index"
            :class="{'on':picActive==index}"
            @click="choosePic(item,index)"
          >
            <img
              :src="item.pic"
              alt=""
            >
          </li>
        </ul>
      </div>
      <!-- <div class="item">
          <h2>请输入昵称</h2>
          <input
            type="text"
            v-model="user.name"
          >
        </div> -->
      <div class="btn-group">
        <button
          @click="start"
          class="btn-submit"
        >开始答题</button>
      </div>

    </div>

    <!-- 答题 -->
    <div
      v-else
      class="answer"
    >
      <div class="question">
        {{itemNum}}.{{activeItem.title}}
      </div>
      <!-- 渲染题目 -->
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
      picActive: 0, //选择的头像
      showStandard: false,
      user: {
        name: '',
        pic: ''
      },
      timer: ''
    }
  },
  created () {
    if (this.tag === 'home') {
      console.log(this.tag)
      this.initData()
    }
  },
  computed: {
    ...mapState(['userPic', 'answerDetail', 'itemNum']),
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
      this.recordAnswer(item.id);

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
      }, 700);
    },
    // 开始答题
    start () {
      if (!this.user.pic) {
        this.user.pic = this.userPic[0].pic
      }
      this.userInfo(this.user);
      this.$router.push({ path: '/item' })
    }
  },
  beforeDestroy () {
  
  }
}
</script>

<style scoped lang="scss">
.main {
  .user-info {
    padding-top: 1.6rem;
    .item {
      text-align: center;
      margin-bottom: 0.8rem;
      h2 {
        font-size: 0.36rem;
        margin-bottom: 0.4rem;
      }
      input {
        background: #fac172;
        color: #fff;
        line-height: 0.7rem;
        border-radius: 5px;
        padding: 0 0.1rem;
        width: 4.6rem;
      }
      ul {
        display: flex;
        justify-content: center;
        li {
          margin: 0 0.1rem;
          border: 2px solid transparent;
          border-radius: 50%;
          &.on {
            border-color: #ff6868;
          }
          img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
          }
        }
      }
    }
   
  }
}
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
      color: #000;
      width: 4.2rem;
      line-height: 1rem;
      margin-top: 0.2rem;
      font-size: 0.32rem;
      padding-left: 1.2rem;
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