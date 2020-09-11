<template>
  <div>
    <Loading />
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Client',
  components: {
    Navbar: () => import('~/components/common/Layout/Navbar.vue'),
    Footer: () => import('~/components/common/Layout/Footer.vue'),
    Loading: () => import('~/components/common/Template/Loading.vue')
  }
}
</script>
