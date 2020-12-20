import Vue from 'vue'
//  Helper
Vue.filter('lower', (val) => {
  return val.toUpperCase()
})

Vue.filter('upper', (val) => {
  return val.toUpperCase()
})
Vue.filter('capitalize', (val) => {
  return val.replace(/\b\w/g, (l) => l.toUpperCase())
})

Vue.filter('slugify', (val) => {
  // For more information, visit https://www.npmjs.com/package/slug
  var slug = require('slug')
  return slug(val)
})

Vue.filter('numeral', (val) => {
  if (val === 0) return 0
  val = val + ''
  return val.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
})
