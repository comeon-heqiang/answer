<template>
  <div class="title">
    <div v-if="tag==='home'">
      首页
    </div>
    <div v-else-if="tag==='item'">
      <img
        :src="user.pic"
        alt=""
      >
      第{{itemNum}}题
    </div>
    <div v-else>
      {{title}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['tag','title'],
  data () {
    return {

    }
  },
  computed: mapState(['itemNum', 'user']),
  methods: {

  },
}
</script>

<style scoped lang="scss">
.title {
  background: url(../assets/images/bg-header.jpg) no-repeat 0 0 /100% 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
  img {
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 0.2rem;
  }
}
</style>