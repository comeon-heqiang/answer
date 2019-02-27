<template>
  <div>
    <answer-component tag="item"></answer-component>
  </div>
</template>

<script>
import answerComponent from '../../components/ItemContainer'
export default {
  name: "Item",
  created () {

  },
  mounted () {
    let _this = this;
    window.onbeforeunload = function (e) {
      e = e || window.event;
      // 兼容IE8和Firefox 4之前的版本
      if (e) {
        e.returnValue = '关闭提示';
      }

      // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
      return '关闭提示';
    }
  },
  components: {
    answerComponent
  },
  methods: {

  },
  // 组件销毁删除 widow.onbeforeunload 事件
  destroyed () {
    window.onbeforeunload = null
  }
}
</script>

<style scoped>
</style>