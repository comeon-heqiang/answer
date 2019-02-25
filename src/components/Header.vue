<template>
  <div class="title">
    <div v-if="tag==='home'">
      首页
    </div>
    <div v-else>
      <img :src="user.pic" alt="">
      第{{itemNum}}题
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['tag'],
  data () {
    return {

    }
  },
  computed: mapState(['itemNum','user']),
  methods: {

  },
}
</script>

<style scoped lang="scss">
.title {
  background: url(../assets/images/bg-header.jpg) no-repeat 0 0 /100% 100%;
  height: .9rem;
  line-height: .9rem;
  color: #fff;
  font-size: .32rem;
  text-align: center;
  img{
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: .2rem;
  }
}
</style>