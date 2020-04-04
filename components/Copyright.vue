<template>
  <footer>&copy;{{ copyrightDate }}/Stan Kwiatowski</footer>

</template>

<script>
  export default {
    name: "Copyright",
    computed: {
      copyrightDate() {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../static/scss/global';

  footer {
    margin-top: remcalc(70);
    font-size: remcalc(11);
  }
</style>
