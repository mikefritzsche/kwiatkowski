<template>
  <nav>
    <ul>
      <li v-for="(item, i) in links" :key="`nav-link-${i}`">
        <nuxt-link :to="item.link" :class="item.classes">{{ item.label }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "NavLinks",
    props: {
      section: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'routesData',
        'sectionTitles'
      ]),
      links() {
        let linkItems = []
        if (this.section) {
          linkItems = this.sectionTitles.reduce((acc, section) => {
            // console.log('links: ', this.section, section.title, this.section !== section.title)
            if (section.title && (!this.section || this.section !== section.title)) {
              acc.push({ label: section.title, link: `/${section.title}`, classes: ['section'] })
            }
            return acc
          }, [])
        }
        linkItems.unshift({ label: 'Home', link: '/', classes: [] })
        linkItems.push({ label: 'Contact the Artist', link: '/contact', classes: [] })
        return linkItems
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../static/scss/global';

  nav {
    &.top, &.bottom {
      text-align: center;
      list-style-type: none;
      ul {
        margin: 0;
        padding: 0;

        li {
          display: inline-block;
          margin-right: 10px;
          &:last-child {
            margin-right: 0;
          }

          a {
            color: #996633;
            text-decoration: none;
            font-weight: 700;
            &:hover {
              color: #ffc;
            }
            &.section {
              text-transform: capitalize;
            }
          }

          &:after {
            content: "|";
            position: relative;
            left: 5px
          }

          &:last-child {
            &:after {
              content: ""
            }
          }
        }
      }
    }
  }
</style>
