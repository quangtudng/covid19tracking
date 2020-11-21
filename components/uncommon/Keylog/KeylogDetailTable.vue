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
            @click="$bvModal.show(`detail-modal-${data.item.id}`)"
          />
          <fa
            :icon="['fas', 'trash']"
            class="text-danger"
            style="cursor: pointer;"
            @click="$emit('detail-table-delete', data.item)"
          />
          <b-modal
            :id="`detail-modal-${data.item.id}`"
            :title="`Showing detail history of record with id ${data.item.id}`"
            size="xl"
          >
            <b-container fluid>
              <b-row>
                <b-col cols="12" xl="6">
                  <p class="modal-title">
                    User information
                  </p>
                  <b-input-group prepend="RecordId" class="mt-3">
                    <b-form-input disabled :value="data.item.id"></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="Local IP" class="mt-3">
                    <b-form-input
                      disabled
                      :value="data.item.local_ip_address"
                    ></b-form-input>
                  </b-input-group>
                  <p class="modal-title mt-3">
                    User machine information
                  </p>
                  <b-input-group prepend="CPU Info" class="mt-3">
                    <b-form-input
                      disabled
                      :value="data.item.cpu_info"
                    ></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="Machine type" class="mt-3">
                    <b-form-input
                      disabled
                      :value="data.item.machine_type"
                    ></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="System" class="mt-3">
                    <b-form-input
                      disabled
                      :value="data.item.system"
                    ></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="System version" class="mt-3">
                    <b-form-input
                      disabled
                      :value="data.item.system_version"
                    ></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="Time recorded" class="mt-3">
                    <b-form-input
                      disabled
                      :value="data.item.time_recorded"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
                <b-col cols="12" xl="6">
                  <p class="modal-title">
                    User input information
                  </p>
                  <b-input-group prepend="Key count" class="my-3">
                    <b-form-input
                      disabled
                      :value="data.item.key_count"
                    ></b-form-input>
                  </b-input-group>
                  <p class="modal-title mb-3">
                    User formatted input
                  </p>
                  <b-form-textarea
                    id="textarea"
                    class="mb-3"
                    rows="4"
                    disabled
                    max-rows="4"
                    :value="data.item.history"
                  ></b-form-textarea>
                  <p class="modal-title mb-3">
                    User raw input
                  </p>
                  <b-form-textarea
                    id="textarea-2"
                    rows="4"
                    disabled
                    max-rows="4"
                    :value="data.item.history_raw"
                  ></b-form-textarea>
                </b-col>
              </b-row>
            </b-container>
            <template #modal-footer>
              <div class="w-100">
                <b-button
                  variant="primary"
                  size="sm"
                  class="float-right"
                  @click="$bvModal.hide(`detail-modal-${data.item.id}`)"
                >
                  Close
                </b-button>
              </div>
            </template>
          </b-modal>
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
        { key: 'local_ip_address', sortable: true },
        { key: 'key_count', sortable: true },
        { key: 'system', sortable: true },
        { key: 'time_recorded', sortable: true },
        { key: 'Actions' }
      ],
      currentPage: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-title {
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
