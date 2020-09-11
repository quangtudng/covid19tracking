<template>
  <b-navbar toggleable="sm" type="dark" variant="dark">
    <b-navbar-brand to="/">
      Coronavirus Tracker
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <nuxt-link to="#" class="nav-link text-white mx-3">
          Trang chủ
        </nuxt-link>
        <nuxt-link to="#" class="nav-link text-white mx-3">
          Coronavirus là gì?
        </nuxt-link>
        <nuxt-link to="#" class="nav-link text-white mx-3">
          Cách phòng ngừa
        </nuxt-link>
        <nuxt-link to="#" class="nav-link text-white mx-3">
          Thông tin
        </nuxt-link>
        <nuxt-link to="#" class="nav-link text-white mx-3">
          Giới thiệu về chúng tôi
        </nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {}
}
</script>
