<template>
  <b-container class="keylog-container mt-5">
    <b-row>
      <b-col cols="12" class="mb-5">
        <p class="keylog-title">
          Keylog managing system
        </p>
        <div class="d-flex">
          <b-form-input
            v-model="query"
            placeholder="Search box"
            class="mb-4"
            style="max-width: 200px;"
          ></b-form-input>
          <b-button style="height: 38px;" class="ml-2" @click="$fetch()">
            Refresh Table
          </b-button>
        </div>
        <keylog-table
          :items="data"
          :loading="loading"
          :query="query"
          @keylog-table-show="onShow"
          @keylog-table-delete="onDelete"
        />
      </b-col>
      <b-col cols="12">
        <p class="keylog-title">
          Keylog History managing system
        </p>
        <b-form-input
          v-model="queryDetail"
          placeholder="Search box"
          class="mb-4"
          style="max-width: 200px;"
        ></b-form-input>
        <keylog-detail-table
          :query="queryDetail"
          :items="detailData"
          :loading="detailLoading"
          @detail-table-delete="onDetailDelete"
        />
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
    this.loading = true
    const payload = await this.$axios.get('http://localhost:3010/keylog')
    this.data = JSON.parse(payload.data)
    this.detailData = []
    this.showing = null
    this.loading = false
  },
  data() {
    return {
      data: [],
      detailData: [],
      loading: false,
      detailLoading: false,
      showing: null,
      query: '',
      queryDetail: ''
    }
  },
  methods: {
    async onShow(payload) {
      try {
        this.detailLoading = true
        this.showing = payload
        const response = await this.$axios.get(
          'http://localhost:3010/keylog/' + payload.id
        )
        if (response.status === 200) {
          this.detailData = JSON.parse(response.data)
          this.detailLoading = false
        } else {
          this.$bvToast.toast(`An error has occured! Please try again`, {
            title: 'Error',
            autoHideDelay: 5000,
            appendToast: true
          })
        }
      } catch {
        this.$bvToast.toast(`An error has occured! Please try again`, {
          title: 'Error',
          autoHideDelay: 5000,
          appendToast: true
        })
      } finally {
        this.detailLoading = false
      }
    },
    async onDelete(payload) {
      try {
        const response = await this.$axios.delete(
          'http://localhost:3010/keylog/' + payload.id
        )
        if (response.status === 200) {
          this.$fetch()
        } else {
          this.$bvToast.toast(`An error has occured! Please try again`, {
            title: 'Error',
            autoHideDelay: 5000,
            appendToast: true
          })
        }
      } catch {
        this.$bvToast.toast(`An error has occured! Please try again`, {
          title: 'Error',
          autoHideDelay: 5000,
          appendToast: true
        })
      }
    },
    async onDetailDelete(payload) {
      try {
        this.detailLoading = true
        const response = await this.$axios.delete(
          'http://localhost:3010/keylog-history/' + payload.id
        )
        if (response.status === 200) {
          this.onShow(this.showing)
        } else {
          this.$bvToast.toast(`An error has occured! Please try again`, {
            title: 'Error',
            autoHideDelay: 5000,
            appendToast: true
          })
        }
      } catch {
        this.$bvToast.toast(`An error has occured! Please try again`, {
          title: 'Error',
          autoHideDelay: 5000,
          appendToast: true
        })
      } finally {
        this.detailLoading = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.keylog-container {
  min-height: 100vh;
}
.keylog-title {
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
