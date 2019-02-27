<template>
  <div class="main">
    <index-header title="首页"></index-header>
    <!-- 首页 -->
    <div class="user-info">
      <div class="item">
        <h2 class="title">请选择头像</h2>
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
      <!-- 选择栏目 -->
      <div class="category">
        <h2 class="title">请选择答题类型</h2>
        <ul>
          <li
            v-for="item in category"
            :style="{'backgroundColor':bgColorArr[item.id-1]}"
            :class="{'active':activeIndex===item.id}"
            :key="item.id"
            @click="categoryItemClick(item)"
          >
            <div>
              {{item.title}}
            </div>
          </li>
        </ul>
      </div>
      <div class="btn-group">
        <button
          @click="start"
          class="btn-submit"
        >开始答题</button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import indexHeader from '../../components/Header'
export default {
  name: "Index",
  data () {
    return {
      picActive: 0, //选择的头像
      user: {
        name: '',
        pic: ''
      },
      bgColorArr: [],
      activeIndex: 1 //答题类型选择
    }
  },
  created () {
    this.initData()
  },
  mounted () {
    this.bgColor()
  },
  computed: {
    ...mapState(['userPic', 'category'])
  },
  components: {
    indexHeader
  },
  methods: {
    ...mapActions(['initData', 'userInfo']),
    // 选择头像
    choosePic (item, index) {
      this.picActive = index
      this.user.pic = item.pic
    },
    // 开始答题
    start () {
      if (!this.user.pic) {
        this.user.pic = this.userPic[0].pic
      }
      this.userInfo(this.user);
      localStorage.setItem('answerType', this.activeIndex)
      this.$router.push({ path: '/item' })
    },
    // 单个栏目点击
    categoryItemClick (item) {
      this.activeIndex = item.id;
    },
    bgColor () {
      let _this = this;
      for (let i in this.category) {
        this.bgColorArr.push(`rgb(${this.ranDomColor(0, 255)},${+this.ranDomColor(100, 255)},${this.ranDomColor(100, 300)})`)
      }
    },
    // 随机颜色
    ranDomColor (max, min) {
      let random = Math.floor(Math.random() * (max - min)) + min;
      return random;
    }
  },
}
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  font-size: 0.36rem;
  margin-bottom: 0.4rem;
}
.main {
  // 用户选择头像
  .user-info {
    padding-top: 0.2rem;
    .item {
      text-align: center;
      margin-bottom: 0.4rem;
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
  // 栏目
  .category {
    max-width: 500px;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0.4rem;
      li {
        height: 0;
        width: 32%;
        padding-bottom: 32%;
        margin-top: 2%;
        color: #fff;
        font-size: 0.36rem;
        position: relative;
        &.active {
          div {
            border-color: red;
          }
        }
        div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          border: 3px solid transparent;
        }
      }
    }
  }
}

</style>