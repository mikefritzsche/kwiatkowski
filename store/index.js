import routesData from '../static/routesData.json'

export const state = () => ({
  routesData,
  sectionTitles: [
    {title: 'paintings', tn: 't_p_selfportrait_demons.gif'},
    {title: 'watercolors', tn: 't_w_threefish.gif'},
    {title: 'drawings', tn: 't_d_uxmal.gif'}
  ]
})

export const getters = {
  getSectionTitles: state => {
    return state.routesData.reduce((acc, item) => {
      if(!acc.includes(item.section)) acc.push(item.section)
      return acc
    }, [])
  },
  getSectionItem: state => id => {
    return state.routesData.find(item => id === item.name)
  },
  getSectionItems: state => section => {
    return state.routesData.filter(item => section === item.section)
  }
}
