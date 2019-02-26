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
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },
  components: {
    answerComponent
  },
  methods: {
    beforeunloadHandler () {
      alert('刷新')
    }
  },
  beforeDestroy () {

  }
}
</script>

<style scoped>
</style>