<template>
  <!-- Advertisement 3 -->
  <b-container>
    <b-row class="p-5">
      <b-col cols="12">
        <div class="m-auto text-center w-40">
          <h2 class="content-title">
            {{ $t('homepage.ad-6') }}
          </h2>
          <p class="content-description">
            {{ $t('homepage.ad-7') }}
          </p>
        </div>
        <p class="text-danger">
          * Dữ liệu bảng được cập nhật hằng ngày, vui lòng ấn vào tên một đất
          nước nếu muốn xem dữ liệu thực tế
        </p>
      </b-col>
      <b-col cols="12">
        <b-table
          id="user-table"
          responsive
          bordered
          show-empty
          hover
          per-page="10"
          :items="items"
          :fields="fields"
        >
          <template v-slot:cell(Country)="data">
            <img
              :src="`https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${data.item.CountryCode.toLowerCase()}.svg`"
              :alt="data.value"
              width="20px"
            />
            <span class="h-100 m-0 w-100" style="cursor: pointer;">
              {{ data.value }}
            </span>
          </template>
          <template v-slot:cell()="data">
            <span class="h-100 m-0 w-100">
              {{ data.value | numeral }}
            </span>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      fields: [
        { key: 'Country', label: 'Country', sortable: true },
        { key: 'TotalConfirmed', label: 'Total Confirmed', sortable: true },
        { key: 'TotalDeaths', label: 'Total Death', sortable: true },
        { key: 'TotalRecovered', label: 'Total Recovered', sortable: true },
        { key: 'Date', label: 'Date Recorded', sortable: true }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.content-title {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.content-description {
  font-size: 1rem;
  letter-spacing: 1px;
}
</style>
