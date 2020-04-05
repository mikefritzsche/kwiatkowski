<template>
  <div>
    <NavLinks :section="section" class="top" />
    <p style="margin-top: 1.375rem; margin-bottom: 1.375rem; font-weight: bold; font-size: 0.83rem;">
      Click image to view painting
    </p>
    <h1>
      <header>
        <img :src="require(`../../static/images/${section}_of.jpg`)" alt="">
      </header>
    </h1>
    <ul class="image-grid">
      <li v-for="(item, i) in sectionItems" :key="`section-item-${i}`">
        <nuxt-link :to="`/${item.section}/${item.name}/`">
        <img :src="require(`../../static/images/${item.imageTn}`)" alt="">
        <div>{{ item.label }}</div>
        </nuxt-link>
      </li>
    </ul>
    <NavLinks :section="section" class="bottom" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import NavLinks from '../../components/NavLinks'

export default {
  name: 'Index',
  components: {
    NavLinks
  },
  data () {
    return {
      section: this.$route.params.section
    }
  },
  computed: {
    ...mapState(['routesData']),
    ...mapGetters(['getSectionItems']),
    sectionItems() {
      return this.getSectionItems(this.section)
    }
  },
  created () {
    // console.log('section index: ', this.routesData)
  },
  head() {
    return {
      title: `${this.section} of Kwiatkowski`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: this.section }
      ],
      bodyAttrs: {
        class: "section-page section page"
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../static/scss/global';
  div {
    h1 {
      text-align: center;
    }
    ul.image-grid {
      width: 80%;
      margin: remcalc(20) auto 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-content: end;
      justify-content: center;
      li {
        flex: 1 0 21%;
        flex-shrink: inherit;
        /*text-align: center;*/
        margin: 10px;
        align-content: end;
        list-style-type: none;
        display: inline-block;
      }
    }
  }
</style>
