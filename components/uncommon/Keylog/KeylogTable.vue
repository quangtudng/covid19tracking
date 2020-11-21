<template>
  <div>
    <b-table
      id="keylog-table"
      responsive
      bordered
      :filter="query"
      show-empty
      :busy="loading"
      hover
      :per-page="limit"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading</strong>
        </div>
      </template>
      <template #cell(Actions)="data">
        <div>
          <fa
            :icon="['fas', 'eye']"
            class="text-success"
            style="cursor: pointer;"
            @click="$emit('keylog-table-show', data.item)"
          />
          <fa
            :icon="['fas', 'trash']"
            class="text-danger"
            style="cursor: pointer;"
            @click="$emit('keylog-table-delete', data.item)"
          />
        </div>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="items.length"
      :per-page="limit"
      size="sm"
      aria-controls="keylog-table"
    ></b-pagination>
  </div>
</template>
<script>
export default {
  name: 'KeylogTable',
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    },
    limit: {
      type: Number,
      default: 10
    },
    loading: {
      type: Boolean,
      default: false
    },
    query: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      fields: [
        { key: 'id', sortable: true },
        { key: 'public_ip_address', sortable: true },
        { key: 'Actions' }
      ],
      currentPage: 1
    }
  }
}
</script>
