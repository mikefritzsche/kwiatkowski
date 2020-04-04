<template>
  <div class="container">
    <img class="name-sticker left" src="../static/name7.jpg" alt="">
    <img class="name-sticker right" src="../static/name7.jpg" alt="">
    <div>
      <h1 class="title">
        <nuxt-link to="/art">The Art</nuxt-link>
        <nuxt-link to="/artist">The Artist</nuxt-link>
      </h1>
      <h2 class="subtitle">
        The art of Stan Kwiatkowski
      </h2>
      <div class="links">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  head() {
    return {
      title: `The Art of Kwiatkowski`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: 'The art of Kwiatkowski' }
      ],
      bodyAttrs: {
        class: "home page"
      }
    }
  }
}
</script>

<style lang="scss">
  body {

  }
.container {
  margin: 0 auto;
  min-height: 100vh;
  /*display: flex;*/
  background: url(../static/dark_self4.jpg) black no-repeat center fixed;

  h1 {
    &.title {
      font-size: 2rem;
      a {
        color: #996633;
        text-decoration: none;
        &:first-child {

        }
        &:last-child {
          position: relative;
          right: 0;
        }
      }
    }
  }
  .name-sticker {
    position: fixed;
    &.left {
      left: 0
    }
    &.right {
      right: 0;
    }
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
