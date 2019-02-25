<template>
  <div class="main">
    <answer-component tag="home"></answer-component>
  </div>
</template>

<script>
import answerComponent from '../../components/ItemContainer.vue'

export default {
  name: "Index",
  data () {
    return {

    }
  },
  components: {
    answerComponent
  }
}
</script>

<style scoped lang="scss">
</style>