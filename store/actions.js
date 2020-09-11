import Cookie from 'js-cookie'
const CookieParser = require('cookieparser')
export default {
  async nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      const parsed = CookieParser.parse(req.headers.cookie)
      try {
        const token = parsed.token
        const response = await this.$axios.get('/auth/me', {
          headers: {
            'x-access-token': token
          }
        })
        if (response.data.error == undefined) {
          commit('user/SET_TOKEN', token)
          commit('user/SET_USER', response.data.data)
        } else {
          commit('user/SET_USER', null)
        }
      } catch {
        commit('user/SET_USER', null)
        // No valid cookie found
      }
    }
  },
  // If this is called from middleware, cookie won't be found
  async logout({ commit }) {
    await Cookie.remove('token')
    commit('user/SET_USER', null)
  }
}
