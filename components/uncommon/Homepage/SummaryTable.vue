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
          * Dữ liệu bảng được cập nhật hằng ngày
        </p>
        <b-form-input
          v-model="query"
          class="mb-4"
          placeholder="Search by country"
        ></b-form-input>
      </b-col>
      <b-col cols="12">
        <b-table
          id="user-table"
          responsive
          bordered
          :filter="query"
          show-empty
          hover
          per-page="10"
          :items="items"
          :fields="fields"
        >
          <template v-slot:head(Country)="data">
            <span class="font-weight-bold">
              {{ $t(`table.${data.column}`) }}
            </span>
          </template>
          <template v-slot:head(TotalConfirmed)="data">
            <span class="font-weight-bold">
              {{ $t(`table.${data.column}`) }}
            </span>
          </template>
          <template v-slot:head(TotalDeaths)="data">
            <span class="font-weight-bold">
              {{ $t(`table.${data.column}`) }}
            </span>
          </template>
          <template v-slot:head(TotalRecovered)="data">
            <span class="font-weight-bold">
              {{ $t(`table.${data.column}`) }}
            </span>
          </template>
          <template v-slot:head(Date)="data">
            <span class="font-weight-bold">
              {{ $t(`table.${data.column}`) }}
            </span>
          </template>
          <template v-slot:cell(Country)="data">
            <img
              :src="`https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/${data.item.CountryCode.toLowerCase()}.svg`"
              :alt="data.value"
              width="20px"
            />
            <span
              class="h-100 m-0 w-100"
              style="cursor: pointer;"
              @click="$router.push(`/country/${data.item.Slug}`)"
            >
              {{ data.value }}
            </span>
          </template>
          <template v-slot:cell(TotalConfirmed)="data">
            <span class="h-100 m-0 w-100 text-primary">
              {{ data.value | numeral }}
            </span>
          </template>
          <template v-slot:cell(TotalDeaths)="data">
            <span class="h-100 m-0 w-100 text-danger">
              {{ data.value | numeral }}
            </span>
          </template>
          <template v-slot:cell(TotalRecovered)="data">
            <span class="h-100 m-0 w-100 text-success">
              {{ data.value | numeral }}
            </span>
          </template>
          <template v-slot:cell(Date)="data">
            <span class="h-100 m-0 w-100 text-secondary">
              {{ $moment(data.value).format('L, LTS') }}
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
      query: '',
      fields: [
        { key: 'Country', sortable: true },
        { key: 'TotalConfirmed', sortable: true },
        { key: 'TotalDeaths', sortable: true },
        { key: 'TotalRecovered', sortable: true },
        { key: 'Date', sortable: true }
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
