<template>
  <div :class="['section', item.section]">
    <div class="prev-next-nav">
      <div>
        <nuxt-link :to="prevLink">
          <img src="../../static/images/b_back.jpg" alt="">
        </nuxt-link>
      </div>
      <div>
        <nuxt-link :to="nextLink">
          <img src="../../static/images/b_next.jpg" alt="">
        </nuxt-link>
      </div>
      <h1>
        {{ item.label }}
      </h1>
    </div>
<!--    <div>payloadData section: {{ payloadData }}</div>-->
    <div>
      <img
        v-if="item.image"
        class="section-image"
        :src="`/images/${item.image}`"
        :alt="item.image"
      >
    </div>
    <div class="description-block">
      <div>
        {{ item.description }}
      </div>
      <div>
        {{ item.size }}
      </div>
      <div class="price">
        {{ item.price }}
      </div>
    </div>
    <footer>
      <div class="section-tns">
        <ul>
          <li
            v-for="(tn, i) in sectionItems"
            :key="`section-tn-${i}`"
            :class="{active: tn.name === item.name}"
          >
            <img :src="require(`../../static/images/${tn.imageTn}`)" />
<!--            <DynamicImage :image-path="`../../static/images/${tn.imageTn}`" />-->
          </li>
        </ul>
      </div>
      <NavLinks :section="item.section" class="bottom" />
    </footer>
  </div>
</template>
<script>
  // import axios from 'axios'
  import { mapGetters, mapState } from 'vuex'
  import NavLinks from '../../components/NavLinks'

  // import DynamicImage from '../../components/DynamicImage'

  export default {
    asyncData(context) {
      // check if you got a payload first
      // console.log('context: ', context)
      if (context.payload) {
        // console.log('asyncData payload: ', payload)
        // extract the user object passed from nuxt.config.js
        return {
          item: context.payload,
          params: context.params
        }
      }
      else {
        const data =  require('../../static/routesData.json')
        // console.log('context.params: ', context.params)
        return {
          item: data.find(route => route.name === context.params.id),
          params: context.params
        }
      }
    },
    transition: 'page',
    components: {
      // DynamicImage,
      NavLinks
    },
    data() {
      return {
        id: this.$route.params.id,
        isMounted: false,
        params: {},
        payloadData: [],
        windowSize: []
      }
    },
    computed: {
      ...mapState(['sectionTitles']),
      ...mapGetters([
        'getSectionItem',
        'getSectionItems'
      ]),
      // item() {
      //   return this.getSectionItem(this.id)
      // },
      imageStyles() {
        const styles = {
          maxWidth: '100%'
        }
        if (this.isMounted) {
          const width = this.windowSize.length ? this.windowSize[0] : window.innerWidth

          styles.maxWidth = `${width}px`
        }
        return styles
      },
      prevLink() {
        let link
        if (this.sectionItems[this.itemIndex - 1]) {
          link = this.sectionItems[this.itemIndex - 1]
          return `/${link.section}/${link.name}/`
        }
        link = this.sectionTitles[this.sectionIndex]
        return `/${link.title}/`
      },
      nextLink() {
        let link
        if (this.sectionItems[this.itemIndex + 1]) {
          link = this.sectionItems[this.itemIndex + 1]
          return `/${link.section}/${link.name}/`
        }
        link = this.sectionTitles[this.sectionIndex]
        return `/${this.item.section}/`
        // return `/${link.title}/`
      },
      sectionIndex() {
        const index = this.sectionTitles.findIndex(section => section === this.item.section)
        if (index !== -1) {
          return index
        }
        return 0
      },
      sectionItems() {
        return this.getSectionItems(this.item.section)
      },
      itemIndex() {
        return this.sectionItems.findIndex(item => item === this.item)
      }
    },
    mounted() {
      this.$nextTick(() => {
        console.log('payloadData: ', this.payloadData)
        console.log('params: ', this.params)
        this.isMounted = true
        window.addEventListener('resize', this.onResize)
        // window.addEventListener('resize', e => {
        //   console.log('document resize: ', e.innerWidth)
        // })
      })
    },
    methods: {
      onResize() {
        console.log('onResize: ')
        this.windowSize = [window.innerWidth, window.innerHeight]
      }
    },
    head() {
      return {
        title: `The Art of Kwiatkowski`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: "description", name: "description", content: this.id }
        ],
        bodyAttrs: {
          class: 'section-page section page'
        }
      }
    }
  }
</script>
<style scoped>
  footer {
    position: fixed;
    bottom: 0;
    background-color: #000;
  }
</style>
<style lang="scss">
  @import '../../static/scss/global';

  h1 {
    color: #996633;
    font-weight: normal;
    position: relative;
    vertical-align: middle;
    padding-top: remcalc(20);
  }

  .section-image {
    margin-top: remcalc(20);
    max-width: 90%;
  }

  .description-block {
    margin-top: 3rem;
  }

  .price {
    margin: 1.3rem 0;
  }

  .prev-next-nav {
    position: fixed;
    height: remcalc(75);
    width: 100%;
    z-index: 10;
    top: remcalc(0);
    background: #000;

    a {
      display: block;
      height: 100%;
    }

    div {
      position: absolute;
      width: remcalc(64);
      height: remcalc(75);
      z-index: 20;

      &:nth-child(1) {
        left: remcalc(20);
      }

      &:nth-child(2) {
        right: remcalc(20);
      }
    }
  }

  .section-tns {
    li {
      width: remcalc(50);
      height: remcalc(50);
      display: inline-block;
      margin: remcalc(5) remcalc(5);

      &.active {
        border: 1px solid #fff;
        width: remcalc(70);
        height: remcalc(70);
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
