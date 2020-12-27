<template>
  <div>
    <Navbar />
    <nuxt keep-alive />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Client',
  components: {
    Navbar: () => import('~/components/common/Layout/Navbar.vue'),
    Footer: () => import('~/components/common/Layout/Footer.vue')
  }
}
</script>
