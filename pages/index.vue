<template>
  <b-container fluid class="p-0">
    <!-- Header -->
    <b-row class="header-container" no-gutters>
      <b-col cols="12" class="header">
        <p class="header-title">
          {{ $t('homepage.quote-title') }}
        </p>
        <p class="header-description">
          {{ $t('homepage.quote-description') }}
        </p>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col cols="12">
        <Advertisement_1 />
        <Summary :data="data.Global" />
        <SummaryTable :items="data.Countries" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {
  Summary,
  Advertisement_1,
  SummaryTable
} from '~/components/uncommon/Homepage'
export default {
  name: 'Home',
  components: {
    Summary,
    Advertisement_1,
    SummaryTable
  },
  async fetch() {
    const payload = await this.$axios.get('/summary')
    this.data = payload.data
  },
  data() {
    return {
      data: {}
    }
  },
  layout: 'Client',
  head() {
    return {
      title: 'Home page',
      description: 'The home page'
    }
  }
}
</script>
<style lang="scss" scoped>
.header-container {
  height: 450px;
  width: 100%;
  background-image: url('~@/assets/img/header-background.jpg');
  // Parallax Effect
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.header {
  height: 100%;
  width: 50%;
  margin: auto;
  padding: 2.5rem;
}
.header-title {
  color: $white;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.header-description {
  color: $white;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}
@media (max-width: 575.98px) {
  .header {
    width: 80%;
  }
}
</style>
