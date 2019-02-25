<template>
  <div>
    <answer-component tag="item"></answer-component>
  </div>
</template>

<script>
import answerComponent from '../../components/ItemContainer'
export default {
  name:"Item",
  created () {

  },
  components: {
    answerComponent
  }
}
</script>

<style scoped>
</style>