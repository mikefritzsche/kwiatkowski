<template>
  <div>
    <h1>Email the Artist</h1>
    <div class="form-container">
      <label>message</label>
      <textarea v-model="message" />
      <button class="button">Submit</button>
    </div>
    <NavLinks class="bottom" />
    <Copyright />
  </div>
</template>

<script>
  import NavLinks from '../components/NavLinks'
  import Copyright from '../components/Copyright'

  export default {
    name: "Contact",
    components: {
      Copyright,
      NavLinks
    },
    data() {
      return {
        message: ''
      }
    },
    head() {
      return {
        title: `Contact The Artist :: The Art of Kwiatkowski`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: "description", name: "description", content: 'Contact The Artist :: The Art of Kwiatkowski' }
        ],
        bodyAttrs: {
          class: 'section-page section page'
        }
      }
    }
  }
</script>
<style lang="scss">
  @import '../static/scss/global';
</style>

<style lang="scss" scoped>
  .form-container {
    text-align: left;
    width: 80%;
    margin: 0 auto;
    .button {
      position: relative;
      right: 0;
    }
  }
  label, textarea {
    width: 100%;
  }
  textarea {
    min-height: remcalc(100);
    font-size: remcalc(20);
    padding: remcalc(10);
  }

</style>
