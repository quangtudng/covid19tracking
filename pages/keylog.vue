<template>
  <b-container fluid class="keylog-container mt-5">
    <b-row>
      <b-col cols="12">
        <keylog-table :items="data" />
        <keylog-detail-table />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import KeylogTable from '../components/uncommon/Keylog/KeylogTable'
import KeylogDetailTable from '../components/uncommon/Keylog/KeylogDetailTable'
export default {
  components: { KeylogTable, KeylogDetailTable },
  async fetch() {
    const payload = await this.$axios.get(
      'https://schoolkeylogserver.herokuapp.com/keylog'
    )
    this.data = payload.data.data
  },
  data() {
    return {
      data: []
    }
  }
}
</script>
<style lang="scss" scoped>
.keylog-container {
  min-height: 100vh;
}
</style>
