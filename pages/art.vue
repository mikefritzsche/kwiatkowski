<template>
  <div class="container">
    <header>
      <img src="../static/images/the_art_of.jpg" alt="">
    </header>
    <main>
      <ul>
        <li v-for="(section, i) in sectionTitles" :key="`section-title-${i}`">
          <div>
            <nuxt-link :to="`/${section.title}/`">
              <div><img :src="require(`../static/images/${section.tn}`)" alt=""></div>
              {{ section.title}}
            </nuxt-link>
          </div>
        </li>
      </ul>
      <p>Click image to view galleries</p>
    </main>
    <NavLinks class="bottom" />
    <footer>&copy;{{ copyrightDate }} Kwiatowski</footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NavLinks from '../components/NavLinks'

  export default {
    name: 'art',
    components: {
      NavLinks
    },
    head() {
      return {
        title: `The Art of Kwiatkowski`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: "description", name: "description", content: 'The art of Kwiatkowski' }
        ],
        bodyAttrs: {
          class: "art page"
        }
      }
    },
    computed: {
      ...mapState(['sectionTitles']),
      copyrightDate() {
        return new Date().getFullYear()
      }
    }
  }
</script>
<style lang="scss">
  @import '../static/scss/global';
</style>
<style lang="scss">
  body.page {



    nav {
      text-align: center;
      color: #996633;
      font-weight: 700;
      &.links {
        font-size: 12px;
        margin-top: 70px;
        &.bottom {

        }
      }
    }
    footer {
      font-size: 11px;
      color: #ffffcc;
      text-align: center;
      margin-top: 100px;
      font-weight: 700;
    }
  }
</style>
<style scoped lang="scss">
  .container {
    background: #000;

    header {
      text-align: center;
      margin: 20px auto 0 auto;
    }
    main {
      margin-top: 122px;
      p {
        text-align: center;
        margin-top: 46px;
        color: #ffffcc;
        font-weight: 700;
        font-size: 13px;
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      li {
        list-style-type: none;
        font-size: 18px;
        font-weight: 700;
        text-transform: capitalize;
        img {
          width: 76px;
          height: 96px;
        }
        div:last-child {
          margin-top: 20px;
        }
      }
    }
  }
</style>
