<template>
  <img :src="imagePath" alt="">
</template>

<script>
  export default {
    name: "DynamicImage",
    props: {
      image: {
        type: String,
        default: ''
      }
    },
    computed: {
      imagePath() {
        return this.imagePath
      }
    }
  }
</script>

<style scoped>

</style>
